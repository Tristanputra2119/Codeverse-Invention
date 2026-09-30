import Link from 'next/link';
import { Page } from '@/components/site';

export default function ComingSoonPage() { return <Page title="Segera Hadir" description="Fitur ini sedang disiapkan."><Link href="/" className="rounded-lg bg-primary px-5 py-3 font-bold text-navy">Kembali ke Beranda</Link></Page>; }
