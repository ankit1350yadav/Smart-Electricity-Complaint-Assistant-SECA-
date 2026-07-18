import * as React from 'react';import { cn } from '@/lib/utils';
export function Button({className,...props}:React.ButtonHTMLAttributes<HTMLButtonElement>){return <button className={cn('inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02] disabled:opacity-50',className)} {...props}/>}
