'use client';
import React, { useState } from 'react';
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

  const dimensions =
    size === 'sm'
      ? 'h-[2.2em] w-[7.5rem]'
      : 'h-[2.8em] w-44';

  return (
    <a
      href={href}
      className={`relative inline-flex items-center ${dimensions} group
                 bg-white border-2 border-black/10 rounded-xl overflow-visible`}
    >
      <div className='absolute w-[115%] h-[140%] top-[10%] left-1/2 -translate-x-1/2
                      filter blur-[22px] opacity-75 pointer-events-none'>
        <span className='absolute inset-0 rounded-xl bg-[#c8d0ff] filter blur-sm' />
        <div className='relative w-full h-full overflow-hidden rounded-xl'>
          <Liquid isHovered={isHovered} colors={COLORS} />
        </div>
      </div>

      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[38%]
                      w-[90%] h-[115%] rounded-xl
                      bg-[#c7d2fe] filter blur-sm pointer-events-none' />

      <div className='relative w-full h-full overflow-hidden rounded-xl'>
        <span className='absolute inset-0 rounded-xl bg-[#e0e7ff]' />
        <span className='absolute inset-0 rounded-xl bg-[#eef2ff]/80' />
        <Liquid isHovered={isHovered} colors={COLORS} />
        {[1, 2, 3, 4, 5].map((i) => (
          <span
            key={i}
            className={`absolute inset-0 rounded-xl border-[3px] border-white/30 mix-blend-overlay
                        ${i <= 2 ? 'blur-[3px]' : i === 3 ? 'blur-[5px]' : 'blur-[1px]'}`}
          />
        ))}
        <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[38%]
                         w-[65%] h-[45%] rounded-xl filter blur-[14px] bg-white/40
                         pointer-events-none' />
      </div>

      <button
        className='absolute inset-0 rounded-xl bg-transparent cursor-pointer'
        type='button'
        aria-label={label}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className='flex items-center justify-center gap-1.5
                         text-indigo-800 font-semibold tracking-wide whitespace-nowrap
                         group-hover:text-indigo-600 transition-colors duration-200
                         text-sm'>
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
      </button>
    </a>
  );
};

const StartProjectButton: React.FC = () => (
  <LiquidButton label='Start a Project' href='#' size='md' showArrow />
);

export default StartProjectButton;
