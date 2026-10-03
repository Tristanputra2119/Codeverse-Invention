'use client';

import { ServerError } from '@/components/server-error';
import './globals.css';

export default function GlobalError({ retry }: { error: Error & { digest?: string }; retry: () => void }) {
  return <html lang="id"><body><title>Gangguan server · EduVerse</title><ServerError retry={retry} /></body></html>;
}
