import { CourseCard, Page } from '@/components/site';
import { getCourses } from '@/lib/api';

export default async function LearnPathPage() {
  const courses = await getCourses();
  const selected = ['html-css-foundation', 'modern-javascript', 'coding-dasar-website', 'figma-for-developers'].map((id) => courses.find((course) => course.id === id)).filter((course) => course !== undefined);
  return <Page title="Jalur Belajar Web Development" description="Ikuti kelas berikut secara berurutan untuk membangun dasar pengembangan web."><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{selected.map((course, index) => <div key={course.id}><p className="mb-3 text-sm font-bold text-primary-hover">Tahap {index + 1}</p><CourseCard course={course} /></div>)}</div></Page>;
}
