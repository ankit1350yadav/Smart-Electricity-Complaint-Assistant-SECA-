// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Navbar } from '@/components/layout/navbar';
import { ServiceWorkerRegister } from '@/components/pwa/service-worker-register';
import { OfflineSync } from '@/components/pwa/offline-sync';
import { Chatbot } from '@/components/chat/chatbot';
import { LanguageProvider } from '@/components/i18n/language-provider';

export const metadata: Metadata = {
  title: 'SECA | Smart Electricity Complaint Assistant',
  description: 'AI assistant for Indian electricity consumers to report and track complaints.',
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ServiceWorkerRegister />
        <Navbar />
        <LanguageProvider>{children}</LanguageProvider>
        <OfflineSync />
        <Chatbot />
      </body>
    </html>
  );
}
