'use client';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ActionButtonProps {
  href: string;
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
}

export const ActionButton = ({ 
  href, 
  className = '',
  children,
  icon
}: ActionButtonProps) => {
  return (
    <Link 
      href={href} 
      className={`group inline-flex shrink-0 justify-between items-center gap-5 rounded-full px-1 ps-5 py-1 text-white leading-none transition-all disabled:opacity-60 disabled:pointer-events-none animate-breathe-primary-hover ${className}`}
    >
      <span className="text-base font-light">{children}</span>
      <span className="flex aspect-square w-9 shrink-0 items-center justify-center rounded-full bg-black transition-transform group-hover:scale-110 text-white">
        {icon || <ArrowRight />}
      </span>
    </Link>
  );
};
