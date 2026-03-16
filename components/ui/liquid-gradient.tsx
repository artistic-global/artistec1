'use client';
import React, { useMemo } from 'react';
import { motion } from 'motion/react';

type ColorKey =
  | 'color1' | 'color2' | 'color3' | 'color4' | 'color5'
  | 'color6' | 'color7' | 'color8' | 'color9' | 'color10'
  | 'color11' | 'color12' | 'color13' | 'color14' | 'color15'
  | 'color16' | 'color17';

export type Colors = Record<ColorKey, string>;

const svgOrder = ['svg1', 'svg2', 'svg3', 'svg4', 'svg3', 'svg2', 'svg1'] as const;
type SvgKey = (typeof svgOrder)[number];

type Stop = { offset: number; stopColor: string };
type SvgState = { gradientTransform: string; stops: Stop[] };
type SvgStates = Record<SvgKey, SvgState>;

type GradientSvgProps = { className: string; isHovered: boolean; colors: Colors };

const GradientSvg: React.FC<GradientSvgProps> = React.memo(({ className, isHovered, colors }) => {
  const { stops, gradientTransform } = useMemo(() => {
    const svgStates: SvgStates = {
      svg1: {
        gradientTransform: 'translate(287.5 280) rotate(-29.0546) scale(689.807 1000)',
        stops: [
          { offset: 0,        stopColor: colors.color1 },
          { offset: 0.188423, stopColor: colors.color2 },
          { offset: 0.260417, stopColor: colors.color3 },
          { offset: 0.328792, stopColor: colors.color4 },
          { offset: 0.328892, stopColor: colors.color5 },
          { offset: 0.328992, stopColor: colors.color1 },
          { offset: 0.442708, stopColor: colors.color6 },
          { offset: 0.537556, stopColor: colors.color7 },
          { offset: 0.631738, stopColor: colors.color1 },
          { offset: 0.725645, stopColor: colors.color8 },
          { offset: 0.817779, stopColor: colors.color9 },
          { offset: 0.84375,  stopColor: colors.color10 },
          { offset: 0.90569,  stopColor: colors.color1 },
          { offset: 1,        stopColor: colors.color11 },
        ],
      },
      svg2: {
        gradientTransform: 'translate(126.5 418.5) rotate(-64.756) scale(533.444 773.324)',
        stops: [
          { offset: 0,        stopColor: colors.color1 },
          { offset: 0.104167, stopColor: colors.color12 },
          { offset: 0.182292, stopColor: colors.color13 },
          { offset: 0.28125,  stopColor: colors.color1 },
          { offset: 0.328792, stopColor: colors.color4 },
          { offset: 0.328892, stopColor: colors.color5 },
          { offset: 0.453125, stopColor: colors.color6 },
          { offset: 0.515625, stopColor: colors.color7 },
          { offset: 0.631738, stopColor: colors.color1 },
          { offset: 0.692708, stopColor: colors.color8 },
          { offset: 0.75,     stopColor: colors.color14 },
          { offset: 0.817708, stopColor: colors.color9 },
          { offset: 0.869792, stopColor: colors.color10 },
          { offset: 1,        stopColor: colors.color1 },
        ],
      },
      svg3: {
        gradientTransform: 'translate(264.5 339.5) rotate(-42.3022) scale(946.451 1372.05)',
        stops: [
          { offset: 0,        stopColor: colors.color1 },
          { offset: 0.188423, stopColor: colors.color2 },
          { offset: 0.307292, stopColor: colors.color1 },
          { offset: 0.328792, stopColor: colors.color4 },
          { offset: 0.328892, stopColor: colors.color5 },
          { offset: 0.442708, stopColor: colors.color15 },
          { offset: 0.537556, stopColor: colors.color16 },
          { offset: 0.631738, stopColor: colors.color1 },
          { offset: 0.725645, stopColor: colors.color17 },
          { offset: 0.817779, stopColor: colors.color9 },
          { offset: 0.84375,  stopColor: colors.color10 },
          { offset: 0.90569,  stopColor: colors.color1 },
          { offset: 1,        stopColor: colors.color11 },
        ],
      },
      svg4: {
        gradientTransform: 'translate(860.5 420) rotate(-153.984) scale(957.528 1388.11)',
        stops: [
          { offset: 0.109375, stopColor: colors.color11 },
          { offset: 0.171875, stopColor: colors.color2 },
          { offset: 0.260417, stopColor: colors.color13 },
          { offset: 0.328792, stopColor: colors.color4 },
          { offset: 0.328892, stopColor: colors.color5 },
          { offset: 0.328992, stopColor: colors.color1 },
          { offset: 0.442708, stopColor: colors.color6 },
          { offset: 0.515625, stopColor: colors.color7 },
          { offset: 0.631738, stopColor: colors.color1 },
          { offset: 0.692708, stopColor: colors.color8 },
          { offset: 0.817708, stopColor: colors.color9 },
          { offset: 0.869792, stopColor: colors.color10 },
          { offset: 1,        stopColor: colors.color11 },
        ],
      },
    };
    return {
      stops: svgStates.svg1.stops,
      gradientTransform: svgOrder.map((key) => svgStates[key].gradientTransform),
    };
  }, [colors]);

  const variants = useMemo(() => ({
    hovered: {
      gradientTransform,
      transition: { duration: 50, repeat: Infinity, ease: 'linear' as const },
    },
    notHovered: {
      gradientTransform,
      transition: { duration: 10, repeat: Infinity, ease: 'linear' as const },
    },
  }), [gradientTransform]);

  const rawId = React.useId();
  const gradientId = `grad${rawId.replace(/:/g, '')}`;

  return (
    <svg
      className={className}
      width='1030'
      height='280'
      viewBox='0 0 1030 280'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='1030' height='280' rx='140' fill={`url(#${gradientId})`} />
      <defs>
        <motion.radialGradient
          id={gradientId}
          cx='0'
          cy='0'
          r='1'
          gradientUnits='userSpaceOnUse'
          animate={isHovered ? variants.hovered : variants.notHovered}
        >
          {stops.map((stop, index) => (
            <stop key={index} offset={stop.offset} stopColor={stop.stopColor} />
          ))}
        </motion.radialGradient>
      </defs>
    </svg>
  );
});
GradientSvg.displayName = 'GradientSvg';

export type LiquidProps = { isHovered: boolean; colors: Colors; compact?: boolean };

export const Liquid: React.FC<LiquidProps> = React.memo(({ isHovered, colors, compact = false }) => {
  const positions = compact
    ? [
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-difference',
        'top-1/2 left-1/2 -translate-x-[51%] -translate-y-[52%] rotate-[164.971deg] mix-blend-difference',
        'top-1/2 left-1/2 -translate-x-[54%] -translate-y-[48%] rotate-[-11.61deg] mix-blend-difference',
        'top-1/2 left-1/2 -translate-x-[56%] -translate-y-[54%] rotate-[-179.012deg] mix-blend-difference',
      ]
    : [
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-difference',
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[164.971deg] mix-blend-difference',
        'top-1/2 left-1/2 -translate-x-[53%] -translate-y-[53%] rotate-[-11.61deg] mix-blend-difference',
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-[57%] rotate-[-179.012deg] mix-blend-difference',
        'top-1/2 left-1/2 -translate-x-[57%] -translate-y-1/2 rotate-[-29.722deg] mix-blend-difference',
        'top-1/2 left-1/2 -translate-x-[62%] -translate-y-[24%] rotate-[160.227deg] mix-blend-difference',
        'top-1/2 left-1/2 -translate-x-[67%] -translate-y-[29%] rotate-180 mix-blend-hard-light',
      ];

  const compactDimensions = 'w-[18rem] h-[4.75rem]';
  const defaultPrimaryDimensions = 'w-110.75 h-30.25';
  const defaultSecondaryDimensions = 'w-189 h-51.75';

  return (
    <>
      {positions.map((pos, index) => (
        <div
          key={index}
          className={`absolute ${compact ? compactDimensions : index < 3 ? defaultPrimaryDimensions : defaultSecondaryDimensions} ${pos}`}
          style={{ willChange: 'transform' }}
        >
          <GradientSvg className='w-full h-full' isHovered={isHovered} colors={colors} />
        </div>
      ))}
    </>
  );
});
Liquid.displayName = 'Liquid';
