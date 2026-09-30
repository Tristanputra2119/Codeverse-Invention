import { Page } from '@/components/site';
import { CourseCatalog } from '@/components/course-catalog';
import { getCourses } from '@/lib/api';

export default async function CoursesPage() {
  const courses = await getCourses();
  return <Page title="Semua Kelas" description="Pilih materi yang ingin kamu pelajari. Katalog ini dibaca langsung dari database."><CourseCatalog courses={courses} /></Page>;
}
