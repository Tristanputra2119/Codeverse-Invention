import type { Metadata } from 'next';
import { ServerError } from '@/components/server-error';

export const metadata: Metadata = { title: 'Gangguan server · EduVerse', robots: { index: false, follow: false } };

export default function ServerErrorPage() { return <ServerError />; }
