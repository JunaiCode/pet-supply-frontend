'use client';

import { cn } from '@/lib/utils';
import React from 'react';

type Variant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className,
  ...props
}) => {
  const baseStyles =
    'px-6 py-2 font-medium rounded-lg focus:outline-none transition text-sm cursor-pointer';

  const variants: Record<Variant, string> = {
    primary: 'bg-pink-600 text-white hover:bg-pink-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-gray-400 text-gray-700 hover:bg-gray-100',
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};