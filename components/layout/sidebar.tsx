// components/layout/sidebar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/components/i18n/language-provider';

const items = [
  { href: '/', key: 'navHome' },
  { href: '/about', key: 'navAbout' },
  { href: '/features', key: 'navFeatures' },
  { href: '/history', key: 'navHistory' },
  { href: '/profile', key: 'navProfile' },
  { href: '/settings', key: 'navSettings' },
  { href: '/analytics', key: 'navAnalytics' },
  { href: '/complaints', key: 'navComplaints' },
];

export function Sidebar() {
  const pathname = usePathname();
  const { t } = useI18n();

  return (
    <aside className="hidden w-64 border-r border-border md:block">
      <nav className="p-4 space-y-2">
        {items.map((it) => {
          const active = pathname === it.href;
          return (
            <Link
              key={it.href}
              href={it.href}
              className={`block rounded-md px-3 py-2 text-sm ${active ? 'bg-muted text-foreground font-semibold' : 'text-muted-foreground hover:bg-muted/50'}`}
            >
              {t(it.key)}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
