'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'

interface ConnectButtonProps {
  href?: string
  className?: string
}

const ConnectButton = ({ href = '#', className }: ConnectButtonProps) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 rounded-full border border-white/60 bg-white/52 pl-4 pr-2 py-2 text-[12px] font-medium text-[#17131f] backdrop-blur-xl backdrop-saturate-150 shadow-[0_12px_28px_rgba(124,99,173,0.10),inset_0_1px_0_rgba(255,255,255,0.72)] transition-colors hover:bg-white/60',
        className,
      )}
    >
      Connect
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#17131f] text-[10px] text-white">→</span>
    </Link>
  )
}

export default ConnectButton