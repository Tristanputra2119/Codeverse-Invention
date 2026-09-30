'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function EnrollButton({ courseId }: { courseId: string }) {
  const router = useRouter();
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  async function enroll() {
    setBusy(true); setError('');
    try {
      const response = await fetch('/api/enrollments', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ courseId }) });
      if (response.status === 401) { router.push(`/signup?returnTo=${encodeURIComponent(`/course-detail/${courseId}`)}`); return; }
      if (!response.ok) throw new Error('Pendaftaran kelas gagal. Coba lagi.');
      router.push('/dashboard');
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Terjadi kesalahan.'); }
    finally { setBusy(false); }
  }
  return <div><button type="button" disabled={busy} onClick={enroll} className="w-full rounded-lg bg-primary px-5 py-3 font-bold text-navy disabled:opacity-50">{busy ? 'Memproses...' : 'Gabung & Mulai Belajar'}</button>{error && <p role="alert" className="mt-2 text-sm text-red-700">{error}</p>}</div>;
}
