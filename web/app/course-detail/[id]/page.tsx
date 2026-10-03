import { notFound } from 'next/navigation';
import { Page } from '@/components/site';
import { EnrollButton } from '@/components/enroll-button';
import { getCourse } from '@/lib/api';

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = await getCourse(id);
  if (!course) notFound();
  return <Page title={course.title} description={course.description}><div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
    <div><img src={course.image} alt="" className="aspect-video w-full rounded-2xl object-cover" /><h2 className="mt-8 text-xl font-bold text-navy">Tentang kelas</h2><p className="mt-3 leading-relaxed text-gray-700">{course.fullDescription}</p><h2 className="mt-8 text-xl font-bold text-navy">Kurikulum</h2><ol className="mt-4 space-y-3">{course.lessons.map((lesson, index) => <li key={lesson.id} className="rounded-lg border border-gray-200 p-4"><details><summary className="cursor-pointer">{index + 1}. {lesson.title} <span className="float-right text-sm text-gray-500">{lesson.duration}</span></summary><p className="mt-3 whitespace-pre-line leading-relaxed text-gray-700">{lesson.content || 'Materi sedang diperbarui.'}</p></details></li>)}</ol></div>
    <aside className="h-fit rounded-2xl border border-gray-200 p-6 shadow-sm"><p className="text-2xl font-bold">Gratis</p><p className="mt-2 text-sm text-gray-600">{course.duration} · {course.lessonCount} materi</p><div className="mt-6"><EnrollButton courseId={course.id} /></div></aside>
  </div></Page>;
}
