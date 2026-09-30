import Link from 'next/link';
import { Page } from '@/components/site';

export default function NotFound() { return <Page title="Halaman tidak ditemukan" description="Tautan yang Anda buka tidak tersedia."><Link href="/" className="rounded-lg bg-primary px-5 py-3 font-bold text-navy">Kembali ke Beranda</Link></Page>; }
