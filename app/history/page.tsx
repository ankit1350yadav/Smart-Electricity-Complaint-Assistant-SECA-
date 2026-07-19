// app/history/page.tsx
'use client';
import { Sidebar } from '@/components/layout/sidebar';
import { useI18n } from '@/components/i18n/language-provider';

export default function HistoryPage() {
  const { t } = useI18n();
  return (
    <main className="flex min-h-[calc(100vh-73px)]">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl space-y-6 p-6">
        <h1 className="text-2xl font-semibold">{t('historyTitle')}</h1>
        <p className="text-muted-foreground">{t('historyBody')}</p>

        <div className="space-y-3 mt-4">
          <div className="border rounded p-3">
            <div className="flex justify-between">
              <div><strong>Outage near MG Road</strong><div className="text-sm text-muted-foreground">Submitted 2 days ago</div></div>
              <div className="text-sm text-saffron">Resolved</div>
            </div>
          </div>
          <div className="border rounded p-3">
            <div className="flex justify-between">
              <div><strong>Flickering lights</strong><div className="text-sm text-muted-foreground">Submitted 1 week ago</div></div>
              <div className="text-sm text-rose-500">Open</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
