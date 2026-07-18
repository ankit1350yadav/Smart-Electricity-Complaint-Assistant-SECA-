'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input, Textarea } from '@/components/ui/input';
import { VoiceRecorder } from './voice-recorder';
import { saveOfflineComplaint } from '@/lib/offline/complaint-queue';

export function ComplaintForm() {
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = { description, address: String(fd.get('address') || ''), locale: navigator.language || 'en' };
    if (!navigator.onLine) {
      saveOfflineComplaint(payload);
      setMessage('Offline complaint saved. It will sync automatically when internet returns.');
      return;
    }
    const r = await fetch('/api/complaints', { method: 'POST', body: JSON.stringify(payload), headers: { 'content-type': 'application/json' } });
    if (!r.ok) {
      saveOfflineComplaint(payload);
      setMessage('Network issue detected. Complaint saved offline for automatic sync.');
      return;
    }
    setMessage('Complaint submitted with AI analysis.');
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <Textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the electricity issue" />
      <Input name="address" placeholder="Address / landmark" />
      <Input name="image" type="file" accept="image/*" />
      <VoiceRecorder onText={setDescription} />
      <Button>Generate & submit complaint</Button>
      {message && <p role="status" className="rounded-xl bg-primary/10 p-3 text-sm font-semibold">{message}</p>}
    </form>
  );
}
