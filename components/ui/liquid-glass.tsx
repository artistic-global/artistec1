'use client';
import React, { useState } from 'react';
import { motion, type Variants } from 'motion/react';
import { cn } from '@/lib/utils';

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  draggable?: boolean;
  expandable?: boolean;
  width?: string;
  height?: string;
  expandedWidth?: string;
  expandedHeight?: string;
  blurIntensity?: 'sm' | 'md' | 'lg' | 'xl';
  shadowIntensity?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  borderRadius?: string;
  glowIntensity?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const LiquidGlassCard = ({
  children,
  className = '',
  draggable = true,
  expandable = false,
  width,
  height,
  expandedWidth,
  expandedHeight,
  blurIntensity = 'xl',
  borderRadius = '32px',
  glowIntensity = 'sm',
  shadowIntensity = 'md',
  ...props
}: LiquidGlassCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpansion = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!expandable) return;
    if ((e.target as HTMLElement).closest('a, button, input, select, textarea')) return;
    setIsExpanded(!isExpanded);
  };

  const blurClasses = {
    sm: 'backdrop-blur-xs',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  const shadowStyles = {
    none: 'inset 0 0 0 0 rgba(255, 255, 255, 0)',
    xs: 'inset 1px 1px 1px 0 rgba(255, 255, 255, 0.3), inset -1px -1px 1px 0 rgba(255, 255, 255, 0.3)',
    sm: 'inset 2px 2px 2px 0 rgba(255, 255, 255, 0.35), inset -2px -2px 2px 0 rgba(255, 255, 255, 0.35)',
    md: 'inset 3px 3px 3px 0 rgba(255, 255, 255, 0.45), inset -3px -3px 3px 0 rgba(255, 255, 255, 0.45)',
    lg: 'inset 4px 4px 4px 0 rgba(255, 255, 255, 0.5), inset -4px -4px 4px 0 rgba(255, 255, 255, 0.5)',
    xl: 'inset 6px 6px 6px 0 rgba(255, 255, 255, 0.55), inset -6px -6px 6px 0 rgba(255, 255, 255, 0.55)',
  };

  const glowStyles = {
    none: '0 0 0 rgba(255, 255, 255, 0)',
    xs: '0 10px 24px rgba(255, 255, 255, 0.08)',
    sm: '0 12px 28px rgba(255, 255, 255, 0.12)',
    md: '0 14px 32px rgba(255, 255, 255, 0.16)',
    lg: '0 18px 38px rgba(255, 255, 255, 0.18)',
    xl: '0 22px 44px rgba(255, 255, 255, 0.22)',
  };

  const easeCurve: [number, number, number, number] = [0.5, 1.5, 0.5, 1];
  const containerVariants: Variants | undefined = expandable
    ? {
        collapsed: {
          width: width || 'auto',
          height: height || 'auto',
          transition: { duration: 0.4, ease: easeCurve },
        },
        expanded: {
          width: expandedWidth || 'auto',
          height: expandedHeight || 'auto',
          transition: { duration: 0.4, ease: easeCurve },
        },
      }
    : undefined;

  const MotionComponent = draggable || expandable ? motion.div : 'div';

  const motionProps =
    draggable || expandable
      ? {
          variants: containerVariants,
          animate: expandable ? (isExpanded ? 'expanded' : 'collapsed') : undefined,
          onClick: expandable ? handleToggleExpansion : undefined,
          drag: draggable,
          dragConstraints: draggable ? { left: 0, right: 0, top: 0, bottom: 0 } : undefined,
          dragElastic: draggable ? 0.3 : undefined,
          dragTransition: draggable
            ? { bounceStiffness: 300, bounceDamping: 10, power: 0.3 }
            : undefined,
          whileDrag: draggable ? { scale: 1.02 } : undefined,
          whileHover: { scale: 1.01 },
          whileTap: { scale: 0.98 },
        }
      : {};

  return (
    <MotionComponent
      className={cn(
        `relative ${draggable ? 'cursor-grab active:cursor-grabbing' : ''} ${expandable ? 'cursor-pointer' : ''}`,
        className
      )}
      style={{
        borderRadius,
        ...(width && !expandable && { width }),
        ...(height && !expandable && { height }),
      }}
      {...motionProps}
      {...props}
    >
      <div
        className={`absolute inset-0 ${blurClasses[blurIntensity]} backdrop-saturate-150 bg-white/38 z-0`}
        style={{ borderRadius }}
      />
      <div
        className='absolute inset-0 z-10 bg-gradient-to-br from-white/55 via-white/26 to-white/18'
        style={{ borderRadius }}
      />
      <div
        className='absolute inset-0 z-20'
        style={{ borderRadius, boxShadow: glowStyles[glowIntensity] }}
      />
      <div
        className='absolute inset-0 z-30'
        style={{
          borderRadius,
          boxShadow: shadowStyles[shadowIntensity],
          border: '1px solid rgba(255,255,255,0.55)',
        }}
      />
      {children}
    </MotionComponent>
  );
};
