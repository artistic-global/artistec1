'use client';
import { cn } from '@/lib/utils';
import React from 'react';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => (
  <div
    className={cn(
      'mx-auto grid grid-cols-1 gap-3 md:auto-rows-[18rem] md:grid-cols-3',
      className,
    )}
  >
    {children}
  </div>
);

export const BentoGridItem = ({
  className,
  style,
  title,
  description,
  header,
  icon,
  accent,
  number,
  footer,
}: {
  className?: string;
  style?: React.CSSProperties;
  title?: React.ReactNode;
  description?: React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  accent?: string;
  number?: string;
  footer?: React.ReactNode;
}) => (
  <div
    className={cn(
      'group/bento row-span-1 flex flex-col justify-between rounded-2xl border border-[#e8eaf6] bg-white p-5 gap-4 transition duration-200 hover:border-[#c5c8f0] hover:shadow-[0_16px_56px_0_rgba(107,111,212,0.12)]',
      className,
    )}
    style={style}
  >
    <div className="flex-1 min-h-0">{header}</div>
    <div className="transition duration-200 group-hover/bento:translate-x-1">
      {number && (
        <div className="mb-3">
          <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#d8daf0] select-none">{number}</span>
        </div>
      )}
      <div className="mb-1 text-[14px] font-semibold tracking-[-0.02em] text-gray-900 leading-snug">{title}</div>
      <div className="text-[12.5px] font-normal leading-[1.8] text-gray-500">{description}</div>
    </div>
    {footer && <div>{footer}</div>}
  </div>
);
