// app/about/page.tsx
'use client';
import { Sidebar } from '@/components/layout/sidebar';
import { useI18n } from '@/components/i18n/language-provider';

export default function AboutPage() {
  const { t } = useI18n();
  return (
    <main className="flex min-h-[calc(100vh-73px)]">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl space-y-6 p-6">
        <h1 className="text-2xl font-semibold">{t('aboutTitle')}</h1>
        <p className="text-muted-foreground">{t('aboutBody')}</p>
      </section>
    </main>
  );
}
