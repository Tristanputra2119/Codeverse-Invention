import type { Bootcamp, Course, CourseDetail } from './types';

const baseUrl = process.env.API_URL ?? 'http://localhost:4000';

async function get<T>(path: string): Promise<T> {
  const response = await fetch(`${baseUrl}/api${path}`, { cache: 'no-store' });
  if (!response.ok) throw new Error(`API ${path}: ${response.status}`);
  return response.json() as Promise<T>;
}

async function getOptional<T>(path: string): Promise<T | null> {
  const response = await fetch(`${baseUrl}/api${path}`, { cache: 'no-store' });
  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`API ${path}: ${response.status}`);
  return response.json() as Promise<T>;
}

export const getCourses = () => get<Course[]>('/courses');
export const getCourse = (id: string) => getOptional<CourseDetail>(`/courses/${encodeURIComponent(id)}`);
export const getBootcamps = () => get<Bootcamp[]>('/bootcamps');
export const getBootcamp = (id: string) => getOptional<Bootcamp>(`/bootcamps/${encodeURIComponent(id)}`);
