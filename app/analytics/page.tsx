// app/analytics/page.tsx
'use client';
import { Sidebar } from '@/components/layout/sidebar';
import { useI18n } from '@/components/i18n/language-provider';

export default function AnalyticsPage() {
  const { t } = useI18n();
  return (
    <main className="flex min-h-[calc(100vh-73px)]">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl space-y-6 p-6">
        <h1 className="text-2xl font-semibold">{t('analyticsTitle')}</h1>
        <p className="text-muted-foreground">{t('analyticsBody')}</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border rounded p-4">
            <h3 className="font-semibold">Complaints by day</h3>
            <div className="text-sm text-muted-foreground">Example chart placeholder — replace with Recharts.</div>
          </div>
          <div className="border rounded p-4">
            <h3 className="font-semibold">Heatmap</h3>
            <div className="text-sm text-muted-foreground">Map panel placeholder — integrate Google Maps component.</div>
          </div>
        </div>
      </section>
    </main>
  );
}
