import Link from 'next/link';
import { HomeLink, StatusPage } from '@/components/status-page';

export default function NotFound() {
  return <StatusPage code="404" title="Halaman tidak ditemukan" description="Tautan ini mungkin sudah dipindahkan atau tidak tersedia. Kamu tetap bisa melanjutkan perjalanan belajarmu.">
    <HomeLink /><Link href="/courses" className="rounded-xl border border-slate-300 px-5 py-3 font-semibold text-navy">Jelajahi Kelas</Link>
  </StatusPage>;
}
