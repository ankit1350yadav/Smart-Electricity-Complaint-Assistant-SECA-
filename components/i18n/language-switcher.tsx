// components/i18n/language-switcher.tsx
'use client';
import React from 'react';
import { useI18n } from '@/components/i18n/language-provider';
import { localeNames } from '@/lib/i18n/dictionaries';

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  return (
    <div className="flex items-center gap-2">
      <label className="sr-only">Language</label>
      <select
        value={locale}
        onChange={(e) => setLocale(e.target.value as any)}
        className="rounded-md border px-2 py-1 text-sm"
        aria-label="Language"
      >
        {Object.keys(localeNames).map((code) => (
          <option key={code} value={code}>
            {(localeNames as any)[code]}
          </option>
        ))}
      </select>
    </div>
  );
}
