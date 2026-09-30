import Link from 'next/link';
import type { ReactNode } from 'react';
import type { Bootcamp, Course } from '@/lib/types';

export function Header() {
  return <header className="border-b border-gray-100 bg-white">
    <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
      <Link href="/" className="text-2xl font-extrabold text-navy"><span className="text-primary-hover">Edu</span>Verse</Link>
      <div className="flex flex-wrap items-center gap-4 text-sm font-semibold text-navy">
        <Link href="/">Beranda</Link><Link href="/courses">Kelas</Link><Link href="/bootcamps">Bootcamp</Link><Link href="/learn-path">Jalur Belajar</Link><Link href="/dashboard">Dashboard</Link><Link href="/certificates">Sertifikat</Link>
      </div>
      <Link href="/signup" className="rounded-lg bg-primary px-4 py-2 text-sm font-bold text-navy">Daftar / Masuk</Link>
    </nav>
  </header>;
}

export function Footer() {
  return <footer className="mt-16 bg-navy px-5 py-10 text-sm text-white">
    <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-6">
      <div><p className="text-xl font-bold">EduVerse</p><p className="mt-2 text-white/70">Belajar keterampilan digital sesuai kebutuhanmu.</p></div>
      <div className="flex flex-wrap gap-5"><Link href="/privacy">Privasi</Link><Link href="/terms">Ketentuan</Link><Link href="/discussion">Diskusi</Link></div>
    </div>
  </footer>;
}

export function Page({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return <main className="mx-auto min-h-[65vh] max-w-7xl px-5 py-10">
    <h1 className="text-3xl font-bold text-navy">{title}</h1>
    {description && <p className="mt-2 max-w-3xl text-gray-600">{description}</p>}
    <div className="mt-8">{children}</div>
  </main>;
}

export function CourseCard({ course }: { course: Course }) {
  return <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <img src={course.image} alt="" className="aspect-video w-full object-cover" />
    <div className="flex flex-1 flex-col p-5">
      <p className="text-xs font-semibold text-primary-hover">{course.category}</p>
      <h2 className="mt-2 text-lg font-bold text-navy">{course.title}</h2>
      <p className="mt-2 line-clamp-3 text-sm text-gray-600">{course.description}</p>
      <p className="mt-4 text-xs text-gray-500">{course.duration} · {course.lessonCount} materi</p>
      <Link href={`/course-detail/${course.id}`} className="mt-auto rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-bold text-navy">Lihat Kelas</Link>
    </div>
  </article>;
}

export function BootcampCard({ bootcamp }: { bootcamp: Bootcamp }) {
  return <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
    <img src={bootcamp.image} alt="" className="aspect-video w-full object-cover" />
    <div className="flex flex-1 flex-col p-5">
      <p className="text-xs font-semibold text-primary-hover">{bootcamp.category}</p>
      <h2 className="mt-2 text-lg font-bold text-navy">{bootcamp.title}</h2>
      <p className="mt-2 line-clamp-3 text-sm text-gray-600">{bootcamp.description}</p>
      <p className="mt-4 text-xs text-gray-500">{bootcamp.duration} · {bootcamp.startDate}</p>
      <Link href={`/bootcamp-detail/${bootcamp.id}`} className="mt-auto rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-bold text-navy">Lihat Bootcamp</Link>
    </div>
  </article>;
}
