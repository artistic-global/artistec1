'use client';
import React from 'react';
import { LiquidGlassCard } from '@/components/ui/liquid-glass';
import StartProjectButton from '@/components/ui/start-project-button';

const services = [
  'Web Development',
  'Mobile Apps',
  'Custom Software',
  'UI/UX Design',
  'API Integration',
];


const spotlightMetrics = [
  { label: 'Web Platforms', value: '42+' },
  { label: 'Mobile Apps', value: '18+' },
];

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 0 }}
      />

      <div className="relative z-10 min-h-screen px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col justify-between pt-24 sm:pt-28 lg:pt-32">
          <div className="relative flex-1 pb-12 lg:pb-20">

            <div className="grid min-h-[calc(100vh-12rem)] grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,34rem)_1fr] lg:gap-16">
              <div className="relative z-20 max-w-[36rem] lg:pl-10 xl:pl-16">
               

                <div className="mb-5 flex items-center gap-4 sm:mb-7">
                  <span className="h-px w-14 bg-white/70" />
                  <span className="text-[11px] font-medium uppercase tracking-[0.28em] text-white/70">
                    Design Systems For Modern Brands
                  </span>
                </div>

                <h1 className="max-w-[10ch] text-white tracking-[-0.065em] leading-[0.92]">
                  <span className="block text-[3.35rem] font-light sm:text-[4.5rem] md:text-[5.5rem] xl:text-[6.5rem]">
                    We Craft
                  </span>
                  <span className="block text-[4.2rem] font-semibold sm:text-[5.5rem] md:text-[6.8rem] xl:text-[7.8rem]">
                    Digital
                  </span>
                  <span className="block text-[3.35rem] font-light sm:text-[4.5rem] md:text-[5.5rem] xl:text-[6.5rem]">
                    Experiences
                  </span>
                </h1>

                <p className="mt-6 max-w-md text-base leading-8 text-white/78 sm:mt-8">
                  From sleek web apps to powerful mobile products, Artistech builds launch-ready digital systems that feel refined, fast, and unmistakably modern.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
                  <StartProjectButton />
                  <button className="text-sm font-medium tracking-wide text-white/65 transition-colors duration-200 hover:text-white">
                    View Our Work
                  </button>
                </div>

                <div className="mt-8 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2 lg:hidden">
                  <LiquidGlassCard
                    draggable={false}
                    blurIntensity="xl"
                    glowIntensity="sm"
                    shadowIntensity="sm"
                    borderRadius="18px"
                    className="p-5"
                  >
                    <div className="relative z-30">
                      <p className="text-sm font-semibold tracking-wide text-neutral-800">What We Build</p>
                      <p className="mb-4 text-[11px] tracking-wide text-neutral-500">ArtistTech Studio</p>
                      <div className="space-y-2.5">
                        {services.slice(0, 3).map((service) => (
                          <div key={service} className="flex items-center gap-3">
                            <span className="h-1.5 w-1.5 rounded-full bg-neutral-500" />
                            <span className="text-xs font-semibold text-neutral-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </LiquidGlassCard>

                  <LiquidGlassCard
                    draggable={false}
                    blurIntensity="xl"
                    glowIntensity="sm"
                    shadowIntensity="sm"
                    borderRadius="18px"
                    className="p-5"
                  >
                    <div className="relative z-30 flex h-full flex-col justify-between gap-5">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Projects Shipped</p>
                        <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-800">120+</p>
                      </div>
                      <div className="flex gap-2">
                        {spotlightMetrics.map((metric) => (
                          <div key={metric.label} className="rounded-full bg-white/55 px-3 py-1.5 text-[11px] font-semibold text-neutral-700">
                            {metric.value}
                          </div>
                        ))}
                      </div>
                    </div>
                  </LiquidGlassCard>
                </div>
              </div>

              <div className="relative hidden h-full min-h-[38rem] lg:block">
                <div className="absolute right-[3%] top-[18%] w-[17rem] xl:w-[18.5rem]">
                  <LiquidGlassCard
                    draggable={false}
                    blurIntensity="xl"
                    glowIntensity="sm"
                    shadowIntensity="sm"
                    borderRadius="20px"
                    className="p-5"
                  >
                    <div className="relative z-30">
                      <p className="text-sm font-semibold tracking-wide text-neutral-800">What We Build</p>
                      <p className="mb-4 text-[11px] tracking-wide text-neutral-500">ArtistTech Studio</p>
                      <div className="flex flex-col">
                        {services.map((service, idx) => (
                          <div
                            key={service}
                            className={`flex items-center gap-3 py-2.5 ${
                              idx !== services.length - 1 ? 'border-b border-black/5' : ''
                            }`}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-neutral-500 shrink-0" />
                            <span className="text-xs font-semibold text-neutral-700">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </LiquidGlassCard>
                </div>

                <div className="absolute bottom-[25%] right-[6%] w-[17rem] xl:w-[18rem]">
                  <LiquidGlassCard
                    draggable={false}
                    blurIntensity="xl"
                    glowIntensity="sm"
                    shadowIntensity="sm"
                    borderRadius="20px"
                    className="p-5"
                  >
                    <div className="relative z-30">
                      <p className="text-[11px] uppercase tracking-[0.24em] text-neutral-500">Projects Shipped</p>
                      <p className="mt-1 text-3xl font-bold tracking-tight text-neutral-800">120+</p>
                    </div>
                  </LiquidGlassCard>
                </div>

                <div className="absolute bottom-[6%] left-[10%] w-[30rem] xl:w-[34rem]">
                  <LiquidGlassCard
                    draggable={false}
                    blurIntensity="xl"
                    glowIntensity="sm"
                    shadowIntensity="sm"
                    borderRadius="22px"
                    className="p-5"
                  >
                    <div className="relative z-30 flex items-center gap-4 xl:gap-5">
                      <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-[#f5f2ff] via-[#d6d9ff] to-[#b9c3ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                        <div className="h-12 w-12 rounded-full bg-white/65 blur-[1px]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-base font-semibold tracking-tight text-neutral-800">Launch-ready product systems</p>
                            <p className="mt-2 max-w-md text-sm leading-6 text-neutral-600">
                              Strategy, interface design, and engineering working together so the brand, product, and performance all feel aligned.
                            </p>
                          </div>
                          <button className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/60 text-neutral-700 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </LiquidGlassCard>
                </div>

                <div className="absolute bottom-[6%] right-[4%] flex gap-3">
                  {spotlightMetrics.map((metric) => (
                    <LiquidGlassCard
                      key={metric.label}
                      draggable={false}
                      blurIntensity="lg"
                      glowIntensity="xs"
                      shadowIntensity="xs"
                      borderRadius="999px"
                      className="px-4 py-2.5"
                    >
                      <div className="relative z-30 flex items-center gap-3">
                        <span className="text-xl font-semibold tracking-tight text-neutral-800">{metric.value}</span>
                        <span className="text-xs font-medium text-neutral-600">{metric.label}</span>
                      </div>
                    </LiquidGlassCard>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 pb-8 md:flex">
          <div className="w-6 h-px bg-white/30" />
          <span className="text-white/40 text-xs tracking-widest uppercase">Custom Software · Web Apps · Mobile</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
