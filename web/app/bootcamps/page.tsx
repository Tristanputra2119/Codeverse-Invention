import { BootcampCard, Page } from '@/components/site';
import { getBootcamps } from '@/lib/api';

export default async function BootcampsPage() {
  const camps = await getBootcamps();
  return <Page title="Bootcamp" description="Program intensif bersama mentor. Pendaftaran di portfolio ini adalah simulasi tanpa transaksi."><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{camps.map((camp) => <BootcampCard key={camp.id} bootcamp={camp} />)}</div></Page>;
}
