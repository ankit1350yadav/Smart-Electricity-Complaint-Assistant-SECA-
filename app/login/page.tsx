import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl place-items-center p-6">
      <Card className="w-full max-w-md">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-saffron">Secure access</p>
        <h1 className="mt-3 text-3xl font-black">Login to SECA</h1>
        <p className="mt-2 text-sm opacity-75">Access your complaint dashboard, live status, notifications, and engineer updates.</p>
        <form className="mt-6 space-y-4">
          <Input type="email" name="email" placeholder="Email address" autoComplete="email" required />
          <Input type="password" name="password" placeholder="Password" autoComplete="current-password" required />
          <Button className="w-full">Login securely</Button>
        </form>
        <div className="mt-4 flex justify-between text-sm">
          <Link className="text-primary" href="/register">Create account</Link>
          <Link className="text-primary" href="/settings">Forgot password?</Link>
        </div>
      </Card>
    </main>
  );
}
