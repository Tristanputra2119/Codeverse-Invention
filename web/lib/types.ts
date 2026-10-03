export interface Course {
  id: string;
  category: string;
  title: string;
  image: string;
  duration: string;
  description: string;
  fullDescription: string;
  lessonCount: number;
}
export interface Lesson { id: number; courseId: string; title: string; duration: string; position: number; content: string }
export interface CourseDetail extends Course { lessons: Lesson[] }
export interface Bootcamp {
  id: string;
  category: string;
  title: string;
  image: string;
  startDate: string;
  duration: string;
  groupSize: string;
  price: number;
  originalPrice: number;
  description: string;
  fullDescription: string;
  mentorName: string;
  mentorRole: string;
  schedule: { title: string; duration: string }[];
}
export interface Learner { id: number; name: string; email: string; role: 'learner' | 'admin' }
export interface Maintenance { enabled: boolean; message: string }
export interface DashboardData {
  courses: { id: string; title: string; image: string; category: string; totalLessons: number; completedLessons: number }[];
  bootcamps: { id: string; title: string; image: string; status: 'simulated' }[];
}
