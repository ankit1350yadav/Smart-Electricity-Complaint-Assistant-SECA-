// components/i18n/language-provider.tsx
'use client';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { dictionaries, locales, type Locale, t as translate, localeNames } from '@/lib/i18n/dictionaries';
import { useRouter, useSearchParams } from 'next/navigation';

type I18nContext = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  locales: readonly Locale[];
  localeNames: Record<Locale,string>;
};

const defaultLocale: Locale = 'en';

const Context = createContext<I18nContext | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const params = useSearchParams();
  const paramLocale = (params?.get('lang') || undefined) as Locale | undefined;
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window !== 'undefined') {
      const ls = localStorage.getItem('seca_locale') as Locale | null;
      return (ls as Locale) ?? (paramLocale ?? defaultLocale);
    }
    return defaultLocale;
  });

  useEffect(() => {
    localStorage.setItem('seca_locale', locale);
  }, [locale]);

  useEffect(() => {
    if (paramLocale && paramLocale !== locale) {
      setLocaleState(paramLocale);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paramLocale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    // update URL param without reloading
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      const search = new URLSearchParams(window.location.search);
      search.set('lang', l);
      router.replace(`${pathname}?${search.toString()}`);
    }
  };

  const ctx = useMemo<I18nContext>(() => ({
    locale,
    setLocale,
    t: (key: string) => translate(locale, key),
    locales,
    localeNames,
  }), [locale]);

  return <Context.Provider value={ctx}>{children}</Context.Provider>;
}

export function useI18n() {
  const ctx = useContext(Context);
  if (!ctx) throw new Error('useI18n must be used within LanguageProvider');
  return ctx;
}
