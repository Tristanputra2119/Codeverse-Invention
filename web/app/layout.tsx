import type { Metadata } from 'next';
import { Footer, Header } from '@/components/site';
import { HelpWidget } from '@/components/help-widget';
import './globals.css';

export const metadata: Metadata = { title: 'EduVerse', description: 'Platform belajar keterampilan digital' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="id"><body><Header />{children}<Footer /><HelpWidget /></body></html>;
}
