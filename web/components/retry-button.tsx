'use client';

export function RetryButton({ children, retry, href }: { children: React.ReactNode; retry?: () => void; href?: string }) {
  return <button onClick={() => {
    if (retry) retry();
    else if (href) window.location.assign(href);
    else window.location.reload();
  }} className="rounded-xl bg-navy px-5 py-3 font-bold text-white">{children}</button>;
}
