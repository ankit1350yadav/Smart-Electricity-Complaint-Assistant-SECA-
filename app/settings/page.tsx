// app/settings/page.tsx
'use client';
import { Sidebar } from '@/components/layout/sidebar';
import { useI18n } from '@/components/i18n/language-provider';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function SettingsPage() {
  const { t, locale, setLocale } = useI18n();
  const [demoMode, setDemoMode] = useState(true);

  return (
    <main className="flex min-h-[calc(100vh-73px)]">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl space-y-6 p-6">
        <h1 className="text-2xl font-semibold">{t('settingsTitle')}</h1>
        <p className="text-muted-foreground">{t('settingsBody')}</p>

        <div className="mt-4 border rounded p-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-medium">Demo Mode</div>
              <div className="text-xs text-muted-foreground">Enable guided demo steps</div>
            </div>
            <div>
              <label className="inline-flex items-center">
                <input type="checkbox" checked={demoMode} onChange={() => setDemoMode(!demoMode)} className="mr-2" />
                <span className="text-sm">{demoMode ? 'On' : 'Off'}</span>
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <Button onClick={() => setLocale(locale)}>{t('save')}</Button>
        </div>
      </section>
    </main>
  );
}
