'use client';

import { HomeLink, StatusPage } from './status-page';
import { RetryButton } from './retry-button';

export function ServerError({ retry, code = '500' }: { retry?: () => void; code?: '500' | '503' }) {
  return <StatusPage code={code} title="Terjadi gangguan server" description="Kami belum bisa memuat halaman ini. Coba lagi beberapa saat lagi untuk melanjutkan belajarmu.">
    <RetryButton retry={retry}>Coba Lagi</RetryButton>
    <HomeLink />
  </StatusPage>;
}
