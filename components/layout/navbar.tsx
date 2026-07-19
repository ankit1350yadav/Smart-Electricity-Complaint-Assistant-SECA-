// components/layout/navbar.tsx
'use client';
import Link from 'next/link';
import { useI18n } from '@/components/i18n/language-provider';
import { LanguageSwitcher } from '@/components/i18n/language-switcher';

export function Navbar() {
  const { t } = useI18n();
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-bold">{t('appTitle')}</Link>
          <Link href="/demo" className="text-sm text-saffron">{t('tryDemo')}</Link>
        </div>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link href="/profile" className="text-sm">{t('navProfile')}</Link>
        </div>
      </div>
    </nav>
  );
}
