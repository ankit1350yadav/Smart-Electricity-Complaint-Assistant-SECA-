import { render, screen } from '@testing-library/react';import { describe, expect, it } from 'vitest';import { Button } from '@/components/ui/button';
describe('Button',()=>{it('renders accessible button',()=>{render(<Button>Submit</Button>);expect(screen.getByRole('button',{name:'Submit'})).toBeInTheDocument();});});
