'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import type { CourseDetail, DashboardData, Learner } from '@/lib/types';

export function Dashboard() {
  const router = useRouter();
  const [learner, setLearner] = useState<Learner | null>(null);
  const [data, setData] = useState<DashboardData | null>(null);
  const [detail, setDetail] = useState<CourseDetail | null>(null);
  const [error, setError] = useState('');
  async function load() {
    const [meResponse, dashboardResponse] = await Promise.all([fetch('/api/auth/me'), fetch('/api/dashboard')]);
    if (meResponse.status === 401 || dashboardResponse.status === 401) { router.replace('/signup'); return; }
    if (!meResponse.ok || !dashboardResponse.ok) throw new Error('Dashboard tidak dapat dimuat.');
    setLearner(await meResponse.json() as Learner);
    setData(await dashboardResponse.json() as DashboardData);
  }
  useEffect(() => { void load().catch((cause: unknown) => setError(cause instanceof Error ? cause.message : 'Terjadi kesalahan.')); }, []);
  async function openCourse(id: string) {
    setError('');
    try {
      const response = await fetch(`/api/courses/${encodeURIComponent(id)}`);
      if (!response.ok) throw new Error('Materi tidak dapat dimuat.');
      setDetail(await response.json() as CourseDetail);
    } catch (cause) { setError(cause instanceof Error ? cause.message : 'Terjadi kesalahan.'); }
  }
  async function complete(lessonId: number) {
    if (!detail) return;
    const response = await fetch(`/api/enrollments/${detail.id}/lessons/${lessonId}`, { method: 'PUT' });
    if (!response.ok) { setError('Progres tidak dapat disimpan.'); return; }
    await load();
  }
  async function logout() { await fetch('/api/auth/logout', { method: 'POST' }); router.push('/'); router.refresh(); }
  if (error && !data) return <p role="alert" className="text-red-700">{error}</p>;
  if (!learner || !data) return <p>Memuat dashboard...</p>;
  return <div>
    <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-navy p-6 text-white"><div><h2 className="text-2xl font-bold">Halo, {learner.name}!</h2><p className="mt-1 text-white/70">Lanjutkan perjalanan belajarmu.</p></div><button onClick={logout} className="rounded-lg border border-white px-4 py-2">Keluar</button></div>
    {error && <p role="alert" className="mt-4 text-red-700">{error}</p>}
    <div className="mt-8 grid gap-5 sm:grid-cols-3"><div className="rounded-xl border p-5"><p className="text-sm">Kelas diikuti</p><p className="mt-2 text-3xl font-bold">{data.courses.length}</p></div><div className="rounded-xl border p-5"><p className="text-sm">Kelas selesai</p><p className="mt-2 text-3xl font-bold">{data.courses.filter((course) => course.completedLessons === course.totalLessons).length}</p></div><div className="rounded-xl border p-5"><p className="text-sm">Bootcamp simulasi</p><p className="mt-2 text-3xl font-bold">{data.bootcamps.length}</p></div></div>
    <section className="mt-10"><div className="flex justify-between"><h2 className="text-xl font-bold text-navy">Kelas Saya</h2><Link href="/courses" className="font-semibold text-primary-hover">Cari kelas →</Link></div>{data.courses.length === 0 ? <p className="mt-4 text-gray-600">Belum mengikuti kelas.</p> : <div className="mt-4 grid gap-4 md:grid-cols-2">{data.courses.map((course) => <div key={course.id} className="rounded-xl border p-5"><h3 className="font-bold">{course.title}</h3><p className="mt-2 text-sm text-gray-600">{course.completedLessons} dari {course.totalLessons} materi selesai</p><progress value={course.completedLessons} max={course.totalLessons} className="mt-3 w-full accent-primary" /><button onClick={() => void openCourse(course.id)} className="mt-3 block rounded-lg bg-primary px-4 py-2 text-sm font-bold text-navy">Lanjutkan Belajar</button></div>)}</div>}</section>
    {detail && <section className="mt-8 rounded-xl border border-primary p-5"><h2 className="text-xl font-bold">{detail.title}</h2><p className="mt-1 text-sm text-gray-600">Tandai materi yang sudah kamu pelajari.</p><div className="mt-4 space-y-2">{detail.lessons.map((lesson) => <div key={lesson.id} className="flex flex-wrap items-center justify-between gap-2 rounded-lg border p-3"><span>{lesson.position}. {lesson.title}</span><button onClick={() => void complete(lesson.id)} className="rounded-lg bg-navy px-3 py-1.5 text-sm text-white">Tandai selesai</button></div>)}</div></section>}
    <section className="mt-10"><h2 className="text-xl font-bold text-navy">Bootcamp Saya</h2>{data.bootcamps.length === 0 ? <p className="mt-4 text-gray-600">Belum mendaftar bootcamp.</p> : <ul className="mt-4 space-y-3">{data.bootcamps.map((camp) => <li key={camp.id} className="rounded-xl border p-4"><Link href={`/bootcamp-detail/${camp.id}`} className="font-bold">{camp.title}</Link><span className="ml-3 text-xs text-gray-600">Simulasi pendaftaran</span></li>)}</ul>}</section>
  </div>;
}
