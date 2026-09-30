import { Page } from '@/components/site';

export default function PrivacyPage() { return <Page title="Privasi" description="Informasi penggunaan data pada demo EduVerse."><div className="max-w-3xl space-y-4 leading-relaxed text-gray-700"><p>Nama dan email digunakan untuk akun belajar. Kata sandi disimpan sebagai hash di database lokal, sedangkan sesi login disimpan melalui cookie HTTP-only.</p><p>Data kelas, progres pelajaran, dan pendaftaran simulasi bootcamp tersimpan di database aplikasi. Tidak ada transaksi pembayaran atau pengiriman email dalam demo ini.</p></div></Page>; }
