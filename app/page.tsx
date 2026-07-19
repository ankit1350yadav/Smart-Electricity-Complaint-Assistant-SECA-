// app/page.tsx
'use client';
import Link from 'next/link';
import { useI18n } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { t } = useI18n();
  return (
    <main className="mx-auto max-w-7xl p-6">
      <section className="grid items-center gap-8 py-20 md:grid-cols-2">
        <div>
          <p className="font-bold text-saffron">{t('appTitle')}</p>
          <h1 className="mt-4 text-4xl font-extrabold">{t('homeHero')}</h1>
          <div className="mt-6 flex gap-4">
            <Link href="/demo"><Button>{t('tryDemo')}</Button></Link>
            <Link href="/about" className="text-sm self-center">{t('navAbout')}</Link>
          </div>
        </div>
        <div>
          <div className="h-64 w-full bg-muted rounded-lg flex items-center justify-center">Screenshot / GIF</div>
        </div>
      </section>
    </main>
  );
}
