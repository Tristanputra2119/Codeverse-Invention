import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Page } from '@/components/site';
import { getBootcamp } from '@/lib/api';

export default async function BootcampDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const camp = await getBootcamp(id);
  if (!camp) notFound();
  return <Page title={camp.title} description={camp.description}><div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
    <div><img src={camp.image} alt="" className="aspect-video w-full rounded-2xl object-cover" /><h2 className="mt-8 text-xl font-bold text-navy">Tentang bootcamp</h2><p className="mt-3 leading-relaxed text-gray-700">{camp.fullDescription}</p><h2 className="mt-8 text-xl font-bold text-navy">Jadwal</h2><ol className="mt-4 space-y-3">{camp.schedule.map((item, index) => <li key={index} className="rounded-lg border border-gray-200 p-4">{item.title} <span className="float-right text-sm text-gray-500">{item.duration}</span></li>)}</ol><p className="mt-6 text-sm">Mentor: <strong>{camp.mentorName}</strong> · {camp.mentorRole}</p></div>
    <aside className="h-fit rounded-2xl border border-gray-200 p-6 shadow-sm"><p className="text-2xl font-bold">{camp.price ? `Rp${camp.price.toLocaleString('id-ID')}` : 'Harga menyusul'}</p><p className="mt-2 text-sm text-gray-600">{camp.startDate}</p><Link href={`/payment/${camp.id}`} className="mt-6 block rounded-lg bg-primary px-5 py-3 text-center font-bold text-navy">Simulasikan Pendaftaran</Link></aside>
  </div></Page>;
}
