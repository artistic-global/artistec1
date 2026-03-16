'use client';
import React, { useEffect, useState } from 'react';
import { Colors, Liquid } from '@/components/ui/liquid-gradient';

const COLORS: Colors = {
  color1:  '#FFFFFF',
  color2:  '#A5B4FC',
  color3:  '#C7D2FE',
  color4:  '#EEF2FF',
  color5:  '#F5F7FF',
  color6:  '#BFCBFF',
  color7:  '#818CF8',
  color8:  '#A5B4FC',
  color9:  '#C4B5FD',
  color10: '#DDD6FE',
  color11: '#93C5FD',
  color12: '#E0E7FF',
  color13: '#BAE6FD',
  color14: '#D1D5FB',
  color15: '#E0E7FF',
  color16: '#6366F1',
  color17: '#818CF8',
};

interface LiquidButtonProps {
  label?: string;
  href?: string;
  size?: 'sm' | 'md';
  showArrow?: boolean;
}

export const LiquidButton: React.FC<LiquidButtonProps> = ({
  label = 'Get Started',
  href = '#',
  size = 'md',
  showArrow = false,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [useCompactAnimation, setUseCompactAnimation] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px), (pointer: coarse)');
    const updateCompactAnimation = () => setUseCompactAnimation(mediaQuery.matches);

    updateCompactAnimation();
    mediaQuery.addEventListener('change', updateCompactAnimation);

    return () => mediaQuery.removeEventListener('change', updateCompactAnimation);
  }, []);

  const activate = () => setIsHovered(true);
  const deactivate = () => setIsHovered(false);

  const dimensions =
    size === 'sm'
      ? 'h-[2.2em] w-[7.5rem]'
      : 'h-[2.8em] w-44';

  const haloSpacing =
    size === 'sm'
      ? 'px-2.5 py-2 -mx-2.5 -my-2'
      : 'px-3 py-2.5 -mx-3 -my-2.5';

  return (
    <a
      href={href}
      className={`relative inline-flex items-center justify-center ${haloSpacing} group overflow-visible touch-manipulation`}
      aria-label={label}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onPointerDown={activate}
      onPointerUp={deactivate}
      onPointerCancel={deactivate}
      onFocus={activate}
      onBlur={deactivate}
    >
      <div
        className={`relative ${dimensions} overflow-visible rounded-xl bg-[#f7f8ff] border-2 border-[#c9d4ff]/80`}
      >
        <div className='absolute left-1/2 top-1/2 h-[122%] w-[108%] -translate-x-1/2 -translate-y-[46%]
                        opacity-75 blur-[18px] pointer-events-none
                        sm:h-[140%] sm:w-[115%] sm:-translate-y-[40%] sm:blur-[22px]'>
          <span className='absolute inset-0 rounded-xl bg-[#d8ddff] blur-sm' />
          <div className='relative h-full w-full overflow-hidden rounded-xl bg-linear-to-br from-[#c7d2fe] via-[#a5b4fc] to-[#818cf8]' />
        </div>

        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[38%]
                        w-[88%] h-[108%] rounded-xl bg-[#c7d2fe] blur-sm pointer-events-none
                        sm:w-[90%] sm:h-[115%]' />

        <div className='relative h-full w-full overflow-hidden rounded-xl'>
          <span className='absolute inset-0 rounded-xl bg-[#e7ecff]' />
          <span className='absolute inset-0 rounded-xl bg-[#f5f7ff]/80' />
          <Liquid isHovered={isHovered} colors={COLORS} compact={useCompactAnimation} />
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className={`absolute inset-0 rounded-xl border-[3px] border-white/30 mix-blend-overlay
                          ${i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-[1px]'}`}
            />
          ))}
          <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[38%]
                           h-[42%] w-[60%] rounded-xl bg-white/40 blur-md pointer-events-none
                           sm:h-[45%] sm:w-[65%] sm:blur-[14px]' />
        </div>

        <span
          className='absolute inset-0 z-10 flex items-center justify-center gap-1.5 rounded-xl
                     text-[#4f46b8] font-semibold tracking-wide whitespace-nowrap
                     group-hover:text-[#3d36a1] transition-colors duration-200
                     text-sm pointer-events-none'
        >
          {label}
          {showArrow && (
            <svg
              width='12' height='12'
              viewBox='0 0 24 24' fill='none'
              stroke='currentColor' strokeWidth='2.5'
              className='group-hover:translate-x-0.5 transition-transform duration-200'
            >
              <path d='M5 12h14M12 5l7 7-7 7' />
            </svg>
          )}
        </span>
      </div>
    </a>
  );
};

const StartProjectButton: React.FC = () => (
  <LiquidButton label='Start a Project' href='#' size='md' showArrow />
);

export default StartProjectButton;
