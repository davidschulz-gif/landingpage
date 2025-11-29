import React from 'react';
import { cn } from '@/lib/utils';

interface BreathingAnimationTextProps {
  children: React.ReactNode;
  animationType: 'black-gray' | 'red-orange';
  className?: string;
}

export const BreathingAnimationText: React.FC<BreathingAnimationTextProps> = ({
  children,
  animationType,
  className,
}) => {
  const animationClass =
    animationType === 'black-gray'
      ? 'animate-breathe-black-gray'
      : 'animate-breathe-red-orange';

  return <div className={cn(animationClass, className)}>{children}</div>;
};
