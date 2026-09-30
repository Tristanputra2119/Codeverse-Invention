'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Certificate { code: string; courseId: string; courseTitle: string; learnerName: string; issuedAt: string }

export function Certificates() {
  const router = useRouter();
  const [certificates, setCertificates] = useState<Certificate[] | null>(null);
  const [error, setError] = useState('');
  useEffect(() => {
    void fetch('/api/certificates').then(async (response) => {
      if (response.status === 401) { router.replace('/signup'); return; }
      if (!response.ok) throw new Error('Sertifikat tidak dapat dimuat.');
      setCertificates(await response.json() as Certificate[]);
    }).catch((cause: unknown) => setError(cause instanceof Error ? cause.message : 'Terjadi kesalahan.'));
  }, [router]);
  if (error) return <p role="alert" className="text-red-700">{error}</p>;
  if (!certificates) return <p>Memuat sertifikat...</p>;
  if (certificates.length === 0) return <p>Belum ada sertifikat. Selesaikan semua materi pada kelas yang Anda ikuti.</p>;
  return <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{certificates.map((certificate) => <article key={certificate.code} className="rounded-xl border p-5"><p className="text-xs font-bold text-primary-hover">SERTIFIKAT</p><h2 className="mt-3 text-lg font-bold text-navy">{certificate.courseTitle}</h2><p className="mt-2 text-sm text-gray-600">{certificate.learnerName} · {new Date(certificate.issuedAt).toLocaleDateString('id-ID')}</p><Link href={`/certificate-detail/${certificate.code}`} className="mt-5 inline-block rounded-lg bg-primary px-4 py-2 text-sm font-bold text-navy">Lihat Sertifikat</Link></article>)}</div>;
}
