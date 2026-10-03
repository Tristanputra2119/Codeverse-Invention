import Link from 'next/link';
import type { ReactNode } from 'react';

export function StatusPage({ code, title, description, children }: {
  code: string;
  title: string;
  description: string;
  children?: ReactNode;
}) {
  return <main className="flex min-h-[65vh] items-center justify-center bg-slate-50 px-5 py-16">
    <section className="w-full max-w-xl rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm sm:px-12" aria-labelledby="status-title">
      <p className="text-sm font-bold uppercase tracking-widest text-primary-hover">EduVerse · {code}</p>
      <div aria-hidden="true" className="mx-auto my-7 flex h-24 w-24 items-center justify-center rounded-full bg-primary/15 text-navy">
        <svg viewBox="0 0 48 48" fill="none" className="h-12 w-12" stroke="currentColor" strokeWidth="2.5"><rect x="7" y="8" width="34" height="32" rx="6" /><path d="M16 18h16M16 25h10M16 32h6" /><circle cx="34" cy="32" r="6" fill="#f7bf30" /><path d="m38 36 5 5" /></svg>
      </div>
      <h1 id="status-title" className="text-3xl font-extrabold text-navy">{title}</h1>
      <p className="mt-4 leading-relaxed text-slate-600">{description}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div>
    </section>
  </main>;
}

export function HomeLink() {
  return <Link href="/" className="rounded-xl bg-primary px-5 py-3 font-bold text-navy">Kembali ke Beranda</Link>;
}
