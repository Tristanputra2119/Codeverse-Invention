'use client';

import { useState } from 'react';

const faqs = [
  { question: 'Bagaimana cara mengikuti kelas?', answer: 'Buka detail kelas, masuk ke akun, lalu pilih “Gabung & Mulai Belajar”. Kelas yang diikuti akan muncul di Dashboard.' },
  { question: 'Bagaimana progres disimpan?', answer: 'Materi yang Anda tandai selesai disimpan pada akun dan bisa dilihat kembali di Dashboard.' },
  { question: 'Apakah pendaftaran bootcamp berbayar?', answer: 'Pendaftaran bootcamp di demo portfolio ini hanya simulasi. Tidak ada pembayaran nyata.' },
];

export function HelpWidget() {
  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState('Pilih pertanyaan untuk melihat jawabannya.');
  return <div className="fixed bottom-5 right-5 z-50">
    {open && <section aria-label="Bantuan EduVerse" className="mb-3 w-[min(90vw,340px)] rounded-2xl border border-gray-200 bg-white p-5 shadow-xl"><div className="flex items-center justify-between"><h2 className="font-bold text-navy">Bantuan EduVerse</h2><button type="button" onClick={() => setOpen(false)} aria-label="Tutup bantuan" className="text-xl">×</button></div><div className="mt-4 space-y-2">{faqs.map((faq) => <button key={faq.question} type="button" onClick={() => setAnswer(faq.answer)} className="block w-full rounded-lg border border-gray-200 p-2 text-left text-sm hover:border-primary">{faq.question}</button>)}</div><p role="status" className="mt-4 rounded-lg bg-gray-50 p-3 text-sm text-gray-700">{answer}</p></section>}
    <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} className="rounded-full bg-primary px-5 py-3 font-bold text-navy shadow-lg">Bantuan</button>
  </div>;
}
