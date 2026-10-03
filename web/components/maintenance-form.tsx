'use client';

import { useState, type FormEvent } from 'react';
import type { Maintenance } from '@/lib/types';

export function MaintenanceForm({ initial }: { initial: Maintenance }) {
  const [enabled, setEnabled] = useState(initial.enabled);
  const [message, setMessage] = useState(initial.message);
  const [saved, setSaved] = useState(initial.enabled);
  const [notice, setNotice] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setNotice(''); setError('');
    try {
      const response = await fetch('/api/admin/maintenance', {
        method: 'PUT', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ enabled, message }),
      });
      const result = await response.json() as Maintenance & { error?: string };
      if (!response.ok) throw new Error(result.error ?? 'Pengaturan gagal disimpan.');
      setSaved(result.enabled); setMessage(result.message);
      setNotice(result.enabled ? 'Maintenance aktif. Peserta melihat halaman pemeliharaan.' : 'Maintenance dinonaktifkan. Situs kembali terbuka.');
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Pengaturan gagal disimpan.'); }
    finally { setBusy(false); }
  }
  return <form onSubmit={submit} className="max-w-2xl space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
    <div><h2 className="text-xl font-bold text-navy">Mode Maintenance</h2><p className="mt-2 text-sm text-slate-600">Status tersimpan: <strong>{saved ? 'Maintenance aktif' : 'Situs terbuka'}</strong></p></div>
    <fieldset disabled={busy} className="space-y-5">
      <label className="flex items-center gap-3 font-semibold"><input type="checkbox" checked={enabled} onChange={(event) => setEnabled(event.target.checked)} className="h-5 w-5 accent-navy" />Aktifkan maintenance</label>
      <label className="block font-semibold">Pesan untuk peserta<textarea required maxLength={500} value={message} onChange={(event) => setMessage(event.target.value)} rows={4} className="mt-2 block w-full rounded-xl border border-slate-300 p-3 font-normal" /></label>
      <p className="text-sm text-slate-600">Saat aktif, halaman dan API belajar ditutup untuk peserta. Admin tetap dapat masuk dan menonaktifkan maintenance. Perubahan berlaku pada permintaan berikutnya.</p>
      <button disabled={busy || !message.trim()} className="rounded-xl bg-primary px-5 py-3 font-bold text-navy disabled:opacity-50">{busy ? 'Menyimpan...' : 'Simpan Pengaturan'}</button>
    </fieldset>
    {notice && <p role="status" className="text-green-800">{notice}</p>}
    {error && <p role="alert" className="text-red-700">{error}</p>}
    <a href="/maintenance" target="_blank" rel="noreferrer" className="inline-block font-semibold text-primary-hover underline">Lihat Halaman Maintenance</a>
  </form>;
}
