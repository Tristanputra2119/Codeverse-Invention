import Link from 'next/link';
import { Page } from '@/components/site';

export default function DiscussionPage() { return <Page title="Forum Diskusi" description="Ruang diskusi EduVerse sedang disiapkan."><Link href="/courses" className="rounded-lg bg-primary px-5 py-3 font-bold text-navy">Jelajahi Kelas</Link></Page>; }
