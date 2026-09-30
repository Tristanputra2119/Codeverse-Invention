import Link from 'next/link';
import { BootcampCard, CourseCard } from '@/components/site';
import { getBootcamps, getCourses } from '@/lib/api';

export default async function HomePage() {
  const [courses, bootcamps] = await Promise.all([getCourses(), getBootcamps()]);
  return <main>
    <section className="bg-navy px-5 py-20 text-white"><div className="mx-auto max-w-7xl">
      <p className="font-semibold text-primary">Belajar digital bersama EduVerse</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">Bangun keterampilan untuk masa depanmu</h1>
      <p className="mt-5 max-w-2xl text-lg text-white/75">Pilih kelas, ikuti materi, dan pantau kemajuan belajar di satu tempat.</p>
      <div className="mt-8 flex flex-wrap gap-3"><Link href="/courses" className="rounded-lg bg-primary px-6 py-3 font-bold text-navy">Jelajahi Kelas</Link><Link href="/bootcamps" className="rounded-lg border border-white px-6 py-3 font-bold">Lihat Bootcamp</Link></div>
    </div></section>
    <section className="mx-auto max-w-7xl px-5 py-14"><div className="flex items-end justify-between gap-3"><h2 className="text-2xl font-bold text-navy">Kelas Pilihan</h2><Link href="/courses" className="font-semibold text-primary-hover">Lihat semua →</Link></div><div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{courses.slice(0, 6).map((course) => <CourseCard key={course.id} course={course} />)}</div></section>
    <section className="bg-gray-50 px-5 py-14"><div className="mx-auto max-w-7xl"><div className="flex items-end justify-between gap-3"><h2 className="text-2xl font-bold text-navy">Bootcamp</h2><Link href="/bootcamps" className="font-semibold text-primary-hover">Lihat semua →</Link></div><div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{bootcamps.slice(0, 3).map((camp) => <BootcampCard key={camp.id} bootcamp={camp} />)}</div></div></section>
  </main>;
}
