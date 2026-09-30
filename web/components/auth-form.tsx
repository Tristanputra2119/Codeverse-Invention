'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, type FormEvent } from 'react';

export function AuthForm() {
  const router = useRouter();
  const search = useSearchParams();
  const [mode, setMode] = useState<'register' | 'login'>('register');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(''); setBusy(true);
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const password = String(form.get('password') ?? '');
    if (mode === 'register' && password !== form.get('confirm')) { setError('Konfirmasi kata sandi tidak sama.'); setBusy(false); return; }
    try {
      const response = await fetch(`/api/auth/${mode}`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({ name, email, password }) });
      const result = await response.json() as { error?: string };
      if (!response.ok) throw new Error(result.error ?? 'Gagal masuk.');
      const returnTo = search.get('returnTo');
      router.push(returnTo?.startsWith('/') && !returnTo.startsWith('//') ? returnTo : '/dashboard');
      router.refresh();
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Terjadi kesalahan.'); }
    finally { setBusy(false); }
  }
  return <div className="mx-auto max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
    <div className="flex rounded-lg bg-gray-100 p-1"><button type="button" onClick={() => { setMode('register'); setError(''); }} className={`w-1/2 rounded-md p-2 font-semibold ${mode === 'register' ? 'bg-white text-navy shadow-sm' : 'text-gray-600'}`}>Daftar</button><button type="button" onClick={() => { setMode('login'); setError(''); }} className={`w-1/2 rounded-md p-2 font-semibold ${mode === 'login' ? 'bg-white text-navy shadow-sm' : 'text-gray-600'}`}>Masuk</button></div>
    <form onSubmit={submit} className="mt-6 space-y-4">
      {mode === 'register' && <label className="block text-sm font-semibold">Nama lengkap<input name="name" required className="mt-1 block w-full rounded-lg border border-gray-300 p-3 font-normal" /></label>}
      <label className="block text-sm font-semibold">Email<input name="email" type="email" required className="mt-1 block w-full rounded-lg border border-gray-300 p-3 font-normal" /></label>
      <label className="block text-sm font-semibold">Kata sandi<input name="password" type="password" required minLength={mode === 'register' ? 8 : undefined} className="mt-1 block w-full rounded-lg border border-gray-300 p-3 font-normal" /></label>
      {mode === 'register' && <label className="block text-sm font-semibold">Konfirmasi kata sandi<input name="confirm" type="password" required className="mt-1 block w-full rounded-lg border border-gray-300 p-3 font-normal" /></label>}
      {error && <p role="alert" className="text-sm text-red-700">{error}</p>}
      <button disabled={busy} className="w-full rounded-lg bg-primary p-3 font-bold text-navy disabled:opacity-50">{busy ? 'Memproses...' : mode === 'register' ? 'Buat Akun' : 'Masuk'}</button>
    </form>
  </div>;
}
