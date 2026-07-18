import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function RegisterPage() {
  return (
    <main className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl place-items-center p-6">
      <Card className="w-full max-w-xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-govgreen">Consumer onboarding</p>
        <h1 className="mt-3 text-3xl font-black">Create your SECA account</h1>
        <p className="mt-2 text-sm opacity-75">Register once to file complaints, upload evidence, and receive status updates.</p>
        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <Input name="fullName" placeholder="Full name" autoComplete="name" required />
          <Input name="phone" placeholder="Mobile number" autoComplete="tel" required />
          <Input className="md:col-span-2" type="email" name="email" placeholder="Email address" autoComplete="email" required />
          <Input className="md:col-span-2" type="password" name="password" placeholder="Password" autoComplete="new-password" required />
          <Input className="md:col-span-2" name="address" placeholder="Service address / landmark" required />
          <Button className="md:col-span-2">Register</Button>
        </form>
        <p className="mt-4 text-sm">Already registered? <Link className="text-primary" href="/login">Login</Link></p>
      </Card>
    </main>
  );
}
