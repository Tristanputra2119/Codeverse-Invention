import { notFound } from 'next/navigation';
import { Page } from '@/components/site';

interface Certificate { code: string; courseId: string; courseTitle: string; learnerName: string; issuedAt: string }

export default async function CertificateDetailPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = await params;
  const response = await fetch(`${process.env.API_URL ?? 'http://localhost:4000'}/api/certificates/${encodeURIComponent(code)}`, { cache: 'no-store' });
  if (!response.ok) notFound();
  const certificate = await response.json() as Certificate;
  return <Page title="Verifikasi Sertifikat" description="Halaman publik untuk memeriksa sertifikat yang diterbitkan EduVerse."><article className="mx-auto max-w-3xl rounded-2xl border-4 border-primary bg-white p-10 text-center shadow-sm"><p className="text-sm font-bold uppercase tracking-widest text-primary-hover">Sertifikat Penyelesaian</p><h2 className="mt-6 text-3xl font-bold text-navy">{certificate.learnerName}</h2><p className="mt-4 text-gray-600">telah menyelesaikan kelas</p><p className="mt-2 text-xl font-bold">{certificate.courseTitle}</p><div className="mt-8 border-t pt-6 text-sm text-gray-600"><p>Kode verifikasi: <strong className="text-navy">{certificate.code}</strong></p><p className="mt-2">Terbit: {new Date(certificate.issuedAt).toLocaleDateString('id-ID')}</p></div></article></Page>;
}
