import type { Metadata } from 'next';
import Link from 'next/link';
import { StatusPage } from '@/components/status-page';
import { RetryButton } from '@/components/retry-button';
import type { Maintenance } from '@/lib/types';

export const metadata: Metadata = { title: 'Pemeliharaan · EduVerse', robots: { index: false, follow: false } };

export default async function MaintenancePage() {
  let message = 'Kami sedang meningkatkan layanan. Silakan kembali beberapa saat lagi.';
  try {
    const response = await fetch(`${process.env.API_URL ?? 'http://localhost:4000'}/api/site-status`, { cache: 'no-store' });
    if (response.ok) message = (await response.json() as Maintenance).message;
  } catch { /* The maintenance page remains usable during an API outage. */ }
  return <StatusPage code="503 · Maintenance" title="Kami segera kembali" description={message}>
    <RetryButton href="/">Periksa Lagi</RetryButton>
    <Link href="/signup?returnTo=%2Fadmin" className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-navy">Masuk Admin</Link>
  </StatusPage>;
}
