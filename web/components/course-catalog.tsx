'use client';

import { useMemo, useState } from 'react';
import { CourseCard } from '@/components/site';
import type { Course } from '@/lib/types';

export function CourseCatalog({ courses }: { courses: Course[] }) {
  const [category, setCategory] = useState('Semua');
  const [query, setQuery] = useState('');
  const categories = useMemo(() => ['Semua', ...new Set(courses.map((course) => course.category))], [courses]);
  const visible = courses.filter((course) => (category === 'Semua' || course.category === category) && `${course.title} ${course.description}`.toLocaleLowerCase('id-ID').includes(query.toLocaleLowerCase('id-ID')));
  return <div>
    <label className="block max-w-lg text-sm font-semibold text-navy">Cari kelas<input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Cari judul atau materi" className="mt-2 w-full rounded-lg border border-gray-300 p-3 font-normal" /></label>
    <div className="my-6 flex flex-wrap gap-2" role="group" aria-label="Filter kategori">{categories.map((value) => <button key={value} type="button" onClick={() => setCategory(value)} aria-pressed={category === value} className={`rounded-full border px-4 py-2 text-sm ${category === value ? 'border-navy bg-navy text-white' : 'border-gray-300 text-gray-700'}`}>{value}</button>)}</div>
    {visible.length ? <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{visible.map((course) => <CourseCard key={course.id} course={course} />)}</div> : <p className="py-10 text-center text-gray-600">Kelas tidak ditemukan.</p>}
  </div>;
}
