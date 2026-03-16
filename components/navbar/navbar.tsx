'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { LiquidButton } from '@/components/ui/start-project-button'
import Image from 'next/image'

const navLinks = ['Services', 'Portfolio', 'Technology', 'About', 'Contact']

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true))
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.documentElement.style.overflowY = 'hidden'
      document.body.style.overflowY = 'hidden'
    } else {
      document.documentElement.style.overflowY = ''
      document.body.style.overflowY = ''
    }
    return () => {
      document.documentElement.style.overflowY = ''
      document.body.style.overflowY = ''
    }
  }, [menuOpen])

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50
                    transition-all duration-700 ease-out
                    ${mounted ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}
      >
        <div
          className={`noise-overlay relative w-full flex items-stretch h-[76px] lg:h-[92px]
                      border-b transition-all duration-500
                      ${scrolled
                        ? 'border-white/30 backdrop-blur-2xl bg-white/10 shadow-[0_8px_32px_rgba(172,189,255,0.15)]'
                        : 'border-[#a3b1ff]/25 backdrop-blur-md bg-transparent'
                      }`}
        >
          <div className="relative z-10 flex items-center justify-center w-[85px] md:w-[160px] lg:w-[200px] xl:w-[240px] 
                          border-r border-[#a3b1ff]/25 shrink-0 transition-colors duration-500 px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl">
                <Image 
                  src="/logo.png" 
                  width={44} 
                  height={44} 
                  alt="Artistech logo" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <span className="hidden md:block text-[#4a5290] font-semibold text-[11px] uppercase tracking-[0.2em] whitespace-nowrap">
                Artistech
              </span>
            </Link>
          </div>

          <div className="relative z-10 flex-1 flex items-center justify-start px-6 md:px-10 lg:px-16 overflow-visible">
            <div className="hidden md:flex items-center gap-7 lg:gap-14">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="relative text-[#6a72a0] hover:text-[#3d457f] text-[11px] lg:text-[12px] font-semibold
                             uppercase tracking-[0.2em] transition-colors duration-250 group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px]
                                   bg-[#8890c4]/60 transition-all duration-300 ease-out
                                   group-hover:w-full" />
                </Link>
              ))}
            </div>
            
            <span className="md:hidden text-[#4a5290] font-semibold text-sm uppercase tracking-[0.18em]">
              Artistech
            </span>
          </div>

          <div className="relative z-10 flex items-center justify-end px-5 md:px-8 lg:px-12 shrink-0 
                          border-l border-transparent md:border-[#a3b1ff]/25 transition-colors duration-500">
            <div className="hidden md:block py-4 pr-1 overflow-visible">
              <LiquidButton label='Get Started' href='#' size='sm' />
            </div>

            <button
              className="md:hidden text-[#5f689f] hover:text-[#444d88] transition-colors p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-3.5 relative flex flex-col justify-between">
                <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center
                                  ${menuOpen ? 'rotate-45 translate-y-[6.25px]' : ''}`} />
                <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-200
                                  ${menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'}`} />
                <span className={`block h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center
                                  ${menuOpen ? '-rotate-45 -translate-y-[6.25px]' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 overflow-x-visible overflow-y-auto md:hidden transition-all duration-500 ease-in-out
                    ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0 pointer-events-none'}`}
      >
        <div className={`noise-overlay absolute inset-0 
                         backdrop-blur-2xl bg-linear-to-b from-white/20 via-[#eef0ff]/25 to-[#ccd4ff]/20
                         transition-all duration-500
                         ${menuOpen ? 'backdrop-saturate-150' : 'backdrop-saturate-100'}`}>
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2
                          w-[85vw] h-[85vw] rounded-full
                          bg-[radial-gradient(circle,rgba(165,180,252,0.2)_0%,transparent_70%)]
                          pointer-events-none" />
        </div>

        <div className="relative z-10 flex min-h-dvh flex-col px-8 pt-[100px] pb-24 overflow-visible">
          <div className="flex-1 flex flex-col justify-center gap-1">
            {navLinks.map((item, i) => (
              <Link
                key={item}
                href="#"
                onClick={closeMenu}
                className={`group flex items-center justify-between py-4
                            border-b border-[#a3b1ff]/20 last:border-b-0
                            transition-all duration-500 ease-out
                            ${menuOpen
                              ? 'translate-y-0 opacity-100'
                              : 'translate-y-6 opacity-0'}`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 50}ms` : '0ms' }}
              >
                <span className="text-[#3c437a] text-[1.65rem] font-medium uppercase tracking-[0.14em]
                                 group-hover:text-[#2a3060] transition-colors duration-200">
                  {item}
                </span>
                <svg
                  width="22" height="22" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5"
                  className="text-[#8890c4] opacity-0 -translate-x-3
                             group-hover:opacity-100 group-hover:translate-x-0
                             transition-all duration-300"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>

          <div
            className={`mt-auto pt-8 pb-4 flex flex-col items-center justify-center overflow-visible
                        transition-all duration-500 ease-out
                        ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            style={{ transitionDelay: menuOpen ? `${150 + navLinks.length * 50 + 100}ms` : '0ms' }}
          >
            <div className="relative overflow-visible scale-110 mb-6">
              <LiquidButton label='Get Started' href='#' size='md' />
            </div>
            <p className="mt-8 text-[10px] tracking-[0.25em] uppercase text-[#8890c4] text-center font-medium">
              Technology · Events · AI · Robotics
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
