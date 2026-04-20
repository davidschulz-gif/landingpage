import React from 'react';
import { cn } from '@/lib/utils';

type AnimationVariant = 'black-gray' | 'red-orange' | 'cyan-blue' | 'none';

interface BreathingAnimationTextProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  animationType?: AnimationVariant;
  duration?: number;
  intensity?: number;
  as?: React.ElementType;
}

/**
 * BreathingAnimationText component that applies a subtle breathing effect (color and opacity).
 * Optimized with React.memo and supporting polymorphic elements.
 */
export const BreathingAnimationText = React.memo(({
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

  const customStyle = {
    ...style,
    '--breathe-duration': `${duration}s`,
    '--breathe-intensity': intensity,
  } as React.CSSProperties;

  return (
    <Component
      className={cn(animationClass, className)}
      style={customStyle}
      {...props}
    >
      {children}
    </Component>
  );
});

BreathingAnimationText.displayName = 'BreathingAnimationText';
