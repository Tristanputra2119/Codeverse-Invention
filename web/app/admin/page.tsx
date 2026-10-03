import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Page } from '@/components/site';
import { MaintenanceForm } from '@/components/maintenance-form';
import type { Maintenance } from '@/lib/types';

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const response = await fetch(`${process.env.API_URL ?? 'http://localhost:4000'}/api/admin/maintenance`, {
    headers: { cookie: (await cookies()).toString() }, cache: 'no-store',
  });
  if (response.status === 401) redirect('/signup?returnTo=%2Fadmin');
  if (response.status === 403) redirect('/403');
  if (!response.ok) throw new Error('Pengaturan maintenance tidak dapat dimuat.');
  const initial = await response.json() as Maintenance;
  return <Page title="Panel Admin" description="Atur ketersediaan EduVerse dan informasi pemeliharaan untuk peserta."><MaintenanceForm initial={initial} /></Page>;
}
