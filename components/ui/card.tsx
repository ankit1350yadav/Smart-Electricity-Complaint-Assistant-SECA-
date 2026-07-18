import { cn } from '@/lib/utils';import { PropsWithChildren } from 'react';
export function Card({children,className}:PropsWithChildren<{className?:string}>){return <section className={cn('glass rounded-2xl p-6 shadow-glow',className)}>{children}</section>}
