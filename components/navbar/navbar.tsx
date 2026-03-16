'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { LiquidButton } from '@/components/ui/start-project-button'

const navLinks = ['Services', 'Portfolio', 'Process', 'Contact']

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4 md:pt-5">
      <div className="max-w-7xl mx-auto flex items-center justify-between
                       backdrop-blur-sm
                      border border-white/55
                      rounded-2xl px-5 py-3
                      shadow-[0_16px_40px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.45)]">

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-white/50 border border-white/60
                          flex items-center justify-center
                          shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]">
            <span className="text-neutral-700 font-bold text-xs tracking-wider">AT</span>
          </div>
          <span className="text-neutral-800 font-semibold text-base tracking-wide">
            Artistech
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <Link
              key={item}
              href="#"
              className="text-neutral-600 hover:text-neutral-900 text-sm font-medium tracking-wide transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">

          <LiquidButton label='Get Started' href='#' size='sm' />
          <button
            className="md:hidden text-neutral-700 hover:text-neutral-900 transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-2 mx-auto
                        bg-white/32 backdrop-blur-2xl backdrop-saturate-150
                        border border-white/55
                        rounded-2xl px-5 py-4
                        shadow-[0_16px_40px_rgba(255,255,255,0.12),inset_0_1px_0_rgba(255,255,255,0.45)]">
          {navLinks.map((item) => (
            <Link
              key={item}
              href="#"
              onClick={() => setMenuOpen(false)}
              className="block text-neutral-700 hover:text-neutral-900 py-2.5 text-sm font-medium
                         border-b border-black/5 last:border-0 transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Navbar
