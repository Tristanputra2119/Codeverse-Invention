'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function PaymentForm({ bootcampId }: { bootcampId: string }) {
  const router = useRouter();
  const [done, setDone] = useState(false);
  const [error, setError] = useState('');
  async function submit() {
    setError('');
    try {
      const response = await fetch('/api/bootcamp-enrollments', { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ bootcampId }) });
      if (response.status === 401) { router.push(`/signup?returnTo=${encodeURIComponent(`/payment/${bootcampId}`)}`); return; }
      if (!response.ok) throw new Error('Pendaftaran simulasi gagal disimpan.');
      setDone(true);
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Terjadi kesalahan.'); }
  }
  if (done) return <div role="status" className="rounded-xl border border-green-200 bg-green-50 p-6"><h2 className="text-xl font-bold">Pendaftaran simulasi tersimpan</h2><p className="mt-2">Tidak ada transaksi nyata.</p><Link href="/dashboard" className="mt-5 inline-block rounded-lg bg-primary px-4 py-2 font-bold">Lihat Dashboard</Link></div>;
  return <div className="space-y-4 rounded-xl border p-6"><h2 className="text-xl font-bold">Konfirmasi Simulasi</h2><p className="text-sm text-gray-600">Pendaftaran ini tercatat pada akun Anda. Tidak ada pembayaran yang diproses.</p>{error && <p role="alert" className="text-red-700">{error}</p>}<button type="button" onClick={() => void submit()} className="w-full rounded-lg bg-primary p-3 font-bold text-navy">Simulasikan Pendaftaran</button></div>;
}
