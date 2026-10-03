import type { Metadata } from 'next';
import Link from 'next/link';
import { HomeLink, StatusPage } from '@/components/status-page';

export const metadata: Metadata = { title: 'Akses terbatas · EduVerse', robots: { index: false, follow: false } };

export default function ForbiddenPage() {
  return <StatusPage code="403" title="Akses terbatas" description="Akunmu tidak memiliki izin untuk membuka halaman ini. Masuk dengan akun yang memiliki akses atau kembali ke beranda.">
    <Link href="/signup" className="rounded-xl bg-navy px-5 py-3 font-bold text-white">Masuk ke Akun</Link><HomeLink />
  </StatusPage>;
}
