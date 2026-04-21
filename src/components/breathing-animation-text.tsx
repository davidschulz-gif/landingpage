import React, { memo } from 'react';
import { cn } from '@/lib/utils';

type AnimationVariant = 'black-gray' | 'red-orange' | 'cyan-blue' | 'none';

interface BreathingAnimationTextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  animationType?: AnimationVariant;
  duration?: number;
  intensity?: number;
  as?: any; // Simplified to avoid complex generic reconciliation
}

/**
 * BreathingAnimationText component that applies a subtle breathing effect.
 * Simplified for maximum performance to resolve render-time regressions.
 */
export const BreathingAnimationText = memo(({
  children,
  animationType = 'black-gray',
  duration = 4,
  intensity = 1,
  as: Component = 'div',
  className,
  style,
  ...props
}: BreathingAnimationTextProps) => {
  const animationClass =
    animationType === 'black-gray'
      ? 'animate-breathe-black-gray'
      : animationType === 'red-orange'
      ? 'animate-breathe-red-orange'
      : animationType === 'cyan-blue'
      ? 'animate-breathe-cyan-blue'
      : '';

  return (
    <Component
      className={cn(animationClass, className)}
      style={{
        ...style,
        '--breathe-duration': `${duration}s`,
        '--breathe-intensity': intensity,
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </Component>
  );
});

BreathingAnimationText.displayName = 'BreathingAnimationText';
