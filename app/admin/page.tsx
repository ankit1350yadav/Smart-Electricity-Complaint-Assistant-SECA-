import { Card } from '@/components/ui/card';
import { Sidebar } from '@/components/layout/sidebar';
import { AnalyticsChart } from '@/components/charts/analytics-chart';
import { MapPanel } from '@/components/maps/map-panel';
import { StatusBadge } from '@/components/ui/status-badge';

const queue = ['Transformer Damage', 'Hanging Wire', 'Power Outage', 'Billing Issue'];

export default function AdminPage() {
  return (
    <main className="flex min-h-[calc(100vh-73px)]">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl space-y-6 p-6">
        <div>
          <p className="font-bold text-govgreen">Admin command center</p>
          <h1 className="text-3xl font-black">Complaint operations dashboard</h1>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          <Card><b>Total</b><p className="text-3xl font-black">1,248</p></Card>
          <Card><b>Pending</b><p className="text-3xl font-black text-saffron">186</p></Card>
          <Card><b>Resolved</b><p className="text-3xl font-black text-govgreen">941</p></Card>
          <Card><b>Critical</b><p className="text-3xl font-black text-red-500">23</p></Card>
          <Card><b>Today</b><p className="text-3xl font-black">57</p></Card>
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
          <Card><h2 className="mb-4 text-xl font-black">Complaint mix</h2><AnalyticsChart /></Card>
          <Card><h2 className="mb-4 text-xl font-black">Live queue</h2><div className="space-y-3">{queue.map((item, index) => <div key={item} className="flex justify-between rounded-xl bg-white/50 p-3 dark:bg-slate-900/50"><span>{item}</span><StatusBadge status={index < 2 ? 'critical' : 'medium'} /></div>)}</div></Card>
        </div>
        <MapPanel />
      </section>
    </main>
  );
}
