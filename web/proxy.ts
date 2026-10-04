import { NextResponse, type NextRequest } from 'next/server';
import type { Learner, Maintenance } from './lib/types';

const baseUrl = process.env.API_URL ?? 'http://localhost:4000';

async function currentUser(request: NextRequest): Promise<Learner | null> {
  const apiOrigin = process.env.VERCEL ? request.nextUrl.origin : baseUrl;
  const response = await fetch(`${apiOrigin}/api/auth/me`, { headers: { cookie: request.headers.get('cookie') ?? '' }, cache: 'no-store', signal: AbortSignal.timeout(5000) });
  if (response.status === 401) return null;
  if (!response.ok) throw new Error('Sesi tidak dapat diperiksa.');
  return response.json() as Promise<Learner>;
}

export async function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname;
  if (path === '/500' || path === '/403') return NextResponse.next();
  if (path === '/503') return NextResponse.rewrite(request.nextUrl, { status: 503, headers: { 'Cache-Control': 'no-store', 'Retry-After': '300' } });
  try {
    if (path === '/admin' || path.startsWith('/admin/')) {
      const user = await currentUser(request);
      if (!user) return NextResponse.redirect(new URL('/signup?returnTo=%2Fadmin', request.url));
      if (user.role !== 'admin') return NextResponse.rewrite(new URL('/403', request.url), { status: 403 });
      return NextResponse.next();
    }
    if (path === '/signup') return NextResponse.next();
    // Vercel service bindings are available to functions, but not to proxy.
    const apiOrigin = process.env.VERCEL ? request.nextUrl.origin : baseUrl;
    const response = await fetch(`${apiOrigin}/api/site-status`, { headers: { cookie: request.headers.get('cookie') ?? '' }, cache: 'no-store', signal: AbortSignal.timeout(5000) });
    if (!response.ok) throw new Error('Status situs tidak dapat diperiksa.');
    const status = await response.json() as Maintenance;
    if (path === '/maintenance' || (status.enabled && (await currentUser(request))?.role !== 'admin')) {
      return NextResponse.rewrite(new URL('/maintenance', request.url), {
        status: 503, headers: { 'Retry-After': '300', 'Cache-Control': 'no-store' },
      });
    }
    return NextResponse.next();
  } catch {
    // Keep the error UI available even when the API cannot be reached.
    return NextResponse.rewrite(new URL('/503', request.url), { status: 503, headers: { 'Cache-Control': 'no-store', 'Retry-After': '300' } });
  }
}

export const config = { matcher: ['/((?!api(?:/|$)|_next(?:/|$)|img(?:/|$)|favicon.ico|robots.txt|sitemap.xml).*)'] };
