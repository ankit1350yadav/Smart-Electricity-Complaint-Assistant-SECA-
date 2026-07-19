// app/features/page.tsx
'use client';
import { Sidebar } from '@/components/layout/sidebar';
import { useI18n } from '@/components/i18n/language-provider';

export default function FeaturesPage() {
  const { t } = useI18n();
  return (
    <main className="flex min-h-[calc(100vh-73px)]">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl space-y-6 p-6">
        <h1 className="text-2xl font-semibold">{t('featuresTitle')}</h1>
        <p className="text-muted-foreground">{t('featuresBody')}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold">Multilingual</h3>
            <p className="text-sm text-muted-foreground">Supports Indian languages and English.</p>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold">Offline-first</h3>
            <p className="text-sm text-muted-foreground">Queue and sync when online.</p>
          </div>
          <div className="p-4 border rounded-md">
            <h3 className="font-semibold">AI analysis</h3>
            <p className="text-sm text-muted-foreground">OpenAI-driven classification and safety guidance.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
