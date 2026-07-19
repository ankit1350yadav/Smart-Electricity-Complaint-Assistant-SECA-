// app/profile/page.tsx
'use client';
import { Sidebar } from '@/components/layout/sidebar';
import { useI18n } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const { t } = useI18n();
  return (
    <main className="flex min-h-[calc(100vh-73px)]">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl space-y-6 p-6">
        <h1 className="text-2xl font-semibold">{t('profileTitle')}</h1>
        <p className="text-muted-foreground">{t('profileBody')}</p>
        <div className="mt-4 border rounded p-4">
          <label className="block text-sm text-muted-foreground">Name</label>
          <div className="mt-2">Demo User</div>
          <div className="mt-4 flex gap-2">
            <Button>{t('edit')}</Button>
            <Button>{t('logout')}</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
