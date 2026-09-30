import { Suspense } from 'react';
import { Page } from '@/components/site';
import { AuthForm } from '@/components/auth-form';

export default function SignupPage() {
  return <Page title="Daftar atau Masuk" description="Buat akun untuk menyimpan kelas dan progres belajar."><Suspense><AuthForm /></Suspense></Page>;
}
