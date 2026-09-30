import { notFound } from 'next/navigation';
import { Page } from '@/components/site';
import { PaymentForm } from '@/components/payment-form';
import { getBootcamp } from '@/lib/api';

export default async function PaymentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const camp = await getBootcamp(id);
  if (!camp) notFound();
  return <Page title="Simulasi Pendaftaran" description="Form ini menyimpan minat pendaftaran pada akun Anda. Tidak ada pembayaran atau pengiriman email."><div className="grid gap-8 md:grid-cols-[2fr_1fr]"><PaymentForm bootcampId={camp.id} /><aside className="h-fit rounded-xl border p-5"><h2 className="font-bold">{camp.title}</h2><p className="mt-2 text-sm text-gray-600">{camp.startDate}</p><p className="mt-4 text-xl font-bold">{camp.price ? `Rp${camp.price.toLocaleString('id-ID')}` : 'Harga menyusul'}</p></aside></div></Page>;
}
