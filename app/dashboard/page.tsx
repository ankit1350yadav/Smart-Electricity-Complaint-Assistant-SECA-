import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/layout/sidebar';
import { StatusBadge } from '@/components/ui/status-badge';

const complaints = [
  { id: 'SECA-1024', title: 'Transformer sparking near market', status: 'in_progress' as const, priority: 'critical' as const },
  { id: 'SECA-1023', title: 'Low voltage in Sector 8', status: 'acknowledged' as const, priority: 'medium' as const },
  { id: 'SECA-1022', title: 'Street light failure', status: 'resolved' as const, priority: 'low' as const }
];

export default function DashboardPage() {
  return (
    <main className="flex min-h-[calc(100vh-73px)]">
      <Sidebar />
      <section className="mx-auto w-full max-w-7xl space-y-6 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-bold text-saffron">Consumer dashboard</p>
            <h1 className="text-3xl font-black">Track your electricity complaints</h1>
          </div>
          <Link href="/complaints/new"><Button>New complaint</Button></Link>
        </div>
        <div className="grid gap-4 md:grid-cols-4">
          <Card><b>Total</b><p className="text-4xl font-black">12</p></Card>
          <Card><b>Pending</b><p className="text-4xl font-black text-saffron">3</p></Card>
          <Card><b>Resolved</b><p className="text-4xl font-black text-govgreen">8</p></Card>
          <Card><b>Critical</b><p className="text-4xl font-black text-red-500">1</p></Card>
        </div>
        <Card>
          <h2 className="mb-4 text-xl font-black">Recent complaints</h2>
          <div className="space-y-3">
            {complaints.map((complaint) => (
              <Link key={complaint.id} href={`/complaints/${complaint.id}`} className="flex items-center justify-between rounded-xl border border-border p-4 hover:bg-primary/5">
                <div>
                  <p className="font-bold">{complaint.title}</p>
                  <p className="text-sm opacity-70">{complaint.id}</p>
                </div>
                <div className="flex gap-2"><StatusBadge status={complaint.priority} /><StatusBadge status={complaint.status} /></div>
              </Link>
            ))}
          </div>
        </Card>
      </section>
    </main>
  );
}
