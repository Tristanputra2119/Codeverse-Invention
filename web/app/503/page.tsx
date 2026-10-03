import type { Metadata } from 'next';
import { ServerError } from '@/components/server-error';

export const metadata: Metadata = { title: 'Layanan tidak tersedia · EduVerse', robots: { index: false, follow: false } };

export default function UnavailablePage() { return <ServerError code="503" />; }
