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
  shadowIntensity = 'md',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  glowIntensity: _glowIntensity,
  ...props
}: LiquidGlassCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggleExpansion = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!expandable) return;
    if ((e.target as HTMLElement).closest('a, button, input, select, textarea')) return;
    setIsExpanded(!isExpanded);
  };

  const blurClasses = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-xl',
    xl: 'backdrop-blur-2xl',
  };

  const surfaceClasses = {
    sm: 'bg-white/10',
    md: 'bg-white/12',
    lg: 'bg-white/14',
    xl: 'bg-white/16',
  };

  const blurPixels = {
    sm: '4px',
    md: '12px',
    lg: '20px',
    xl: '28px',
  };

  const shadowStyles = {
    none: 'none',
    xs: '0 16px 40px rgba(172, 189, 255, 0.16), inset 0 1px 0 rgba(245, 247, 255, 0.7)',
    sm: '0 16px 40px rgba(172, 189, 255, 0.16), inset 0 1px 0 rgba(245, 247, 255, 0.7)',
    md: '0 16px 40px rgba(172, 189, 255, 0.16), inset 0 1px 0 rgba(245, 247, 255, 0.7)',
    lg: '0 16px 40px rgba(172, 189, 255, 0.16), inset 0 1px 0 rgba(245, 247, 255, 0.7)',
    xl: '0 16px 40px rgba(172, 189, 255, 0.16), inset 0 1px 0 rgba(245, 247, 255, 0.7)',
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
        `relative ${blurClasses[blurIntensity]} ${surfaceClasses[blurIntensity]} backdrop-saturate-100`,
        `border border-[#dfe7ff]/75`,
        `${draggable ? 'cursor-grab active:cursor-grabbing' : ''} ${expandable ? 'cursor-pointer' : ''}`,
        className
      )}
      style={{
        borderRadius,
        backdropFilter: `blur(${blurPixels[blurIntensity]}) saturate(100%)`,
        WebkitBackdropFilter: `blur(${blurPixels[blurIntensity]}) saturate(100%)`,
        boxShadow: shadowStyles[shadowIntensity],
        ...(width && !expandable && { width }),
        ...(height && !expandable && { height }),
      }}
      {...motionProps}
      {...props}
    >
      <div className='relative z-10'>{children}</div>
    </MotionComponent>
  );
};
