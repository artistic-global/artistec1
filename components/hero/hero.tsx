'use client';
import React from 'react';
import { LiquidGlassCard } from '@/components/ui/liquid-glass';
import StartProjectButton from '@/components/ui/start-project-button';
import Image from 'next/image';

const services = [
  'Web & Mobile App Development',
  'AI, Chatbots & Automation',
  'Robotics & Drone Technology',
  'Event & Artist Management',
  'Cybersecurity Solutions',
];


const spotlightMetrics = [
  { label: 'Projects Delivered', value: '120+' },
  { label: 'Global Partners', value: '3+' },
];

const Hero = () => {
  return (
    <section className="relative isolate w-full min-h-screen overflow-visible lg:h-screen lg:min-h-0">
      <video
        className="absolute inset-0 -z-10 w-full h-full object-cover"
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
      />

      <div className="relative min-h-screen px-5 sm:px-8 md:px-12 lg:h-screen lg:min-h-0 lg:px-16 xl:px-24">
        <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col pt-[80px] sm:pt-[88px] lg:h-full lg:min-h-0 lg:pt-[100px]">

          <div className="flex flex-1 flex-col justify-start gap-10 pt-6 sm:gap-12 sm:pt-8 lg:flex-row lg:items-center lg:justify-center lg:gap-16 lg:pt-0 xl:gap-24">

            <div className="w-full lg:w-auto lg:shrink-0 lg:pl-4 xl:pl-8">
              <div className="mb-5 flex items-center gap-3.5">
                <span className="h-px w-10 bg-gray-600" />
                <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-gray-600">
                  Technology · Events · AI · Robotics
                </span>
              </div>

              <h1 className="text-white tracking-[-0.065em] leading-[0.88]">
                <span className="block text-[3rem] font-light sm:text-[4rem] md:text-[4.8rem] xl:text-[6rem]">We Build</span>
                <span className="block text-[3.8rem] font-semibold sm:text-[4.9rem] md:text-[5.9rem] xl:text-[7rem]">Smarter</span>
                <span className="block text-[3rem] font-light sm:text-[4rem] md:text-[4.8rem] xl:text-[6rem]">Futures</span>
              </h1>

              <p className="mt-5 max-w-[22rem] text-[14px] leading-[1.8] text-gray-600 sm:mt-6 sm:max-w-[26rem]">
                From AI-powered applications and robotics to event management and digital transformation — Artistech delivers end-to-end solutions built for the next era.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 sm:mt-8">
                <StartProjectButton />
                <button className="text-sm font-medium tracking-wide text-gray-600 transition-colors duration-200 hover:text-white">
                  Explore Our Work
                </button>
              </div>

              {/* ── Mobile cards ── */}
              <div className="mt-9 flex flex-col gap-3 lg:hidden">
                {/* Stats strip */}
                <LiquidGlassCard
                  draggable={false}
                  blurIntensity="xl"
                  glowIntensity="sm"
                  shadowIntensity="sm"
                  borderRadius="16px"
                  className="px-5 py-4"
                >
                  <div className="relative z-30 flex items-center justify-between">
                    {[
                      { value: '50+', label: 'Clients' },
                      { value: '120+', label: 'Projects' },
                      { value: '3+', label: 'Partners' },
                    ].map((stat, i, arr) => (
                      <React.Fragment key={stat.label}>
                        <div className="text-center">
                          <p className="text-[1.5rem] font-bold leading-none tracking-tight text-[#3d4d8a]">{stat.value}</p>
                          <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.22em] text-[#9aa5ce]">{stat.label}</p>
                        </div>
                        {i < arr.length - 1 && <div className="h-8 w-px bg-[#c8d1f5]/40" />}
                      </React.Fragment>
                    ))}
                  </div>
                </LiquidGlassCard>

                {/* Services card */}
                <LiquidGlassCard
                  draggable={false}
                  blurIntensity="xl"
                  glowIntensity="sm"
                  shadowIntensity="sm"
                  borderRadius="16px"
                  className="p-4"
                >
                  <div className="relative z-30">
                    <div className="mb-3 flex items-center gap-2">
                      <div className="h-5 w-[2.5px] rounded-full bg-gradient-to-b from-[#6d7fc4] to-[#b2bde8]" />
                      <p className="text-[11.5px] font-semibold tracking-tight text-[#44508f]">What We Build</p>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                      {services.map((service) => (
                        <div key={service} className="flex items-center gap-2">
                          <span className="h-[4px] w-[4px] shrink-0 rounded-full bg-[#8a95d6]" />
                          <span className="text-[10.5px] font-medium leading-tight text-[#5a6499]">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </LiquidGlassCard>
              </div>
            </div>

            <div className="hidden flex-1 lg:flex lg:items-center lg:justify-end">
              <div className="flex w-[15rem] flex-col gap-5 xl:w-[16.5rem]">

                <LiquidGlassCard
                  draggable={false}
                  blurIntensity="xl"
                  glowIntensity="sm"
                  shadowIntensity="sm"
                  borderRadius="20px"
                  className="p-5 xl:p-6"
                >
                  <div className="relative z-30">
                    <div className="mb-4 flex items-center gap-2.5">
                      <div className="h-7 w-[3px] rounded-full bg-gradient-to-b from-[#6d7fc4] to-[#b2bde8]" />
                      <div>
                        <p className="text-[13px] font-semibold leading-tight tracking-tight text-[#44508f]">What We Build</p>
                        <p className="text-[9px] font-medium uppercase tracking-[0.22em] text-[#9aa5ce]">Artistech Global</p>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      {services.map((service, idx) => (
                        <div
                          key={service}
                          className={`flex items-center gap-3 py-2.5 ${
                            idx !== services.length - 1 ? 'border-b border-[#d8dfff]/35' : ''
                          }`}
                        >
                          <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-[#8a95d6]" />
                          <span className="text-[11.5px] font-medium text-[#5a6499]">{service}</span>
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
                  borderRadius="16px"
                  className="px-5 py-4"
                >
                  <div className="relative z-30 flex items-center justify-between">
                    {[
                      { value: '50+', label: 'Clients' },
                      { value: '120+', label: 'Projects' },
                      { value: '3+', label: 'Partners' },
                    ].map((stat, i, arr) => (
                      <React.Fragment key={stat.label}>
                        <div className="text-center">
                          <p className="text-[1.35rem] font-bold leading-none tracking-tight text-[#3d4d8a] xl:text-[1.5rem]">{stat.value}</p>
                          <p className="mt-1 text-[8.5px] font-medium uppercase tracking-[0.2em] text-[#9aa5ce]">{stat.label}</p>
                        </div>
                        {i < arr.length - 1 && <div className="h-8 w-px bg-[#c8d1f5]/40" />}
                      </React.Fragment>
                    ))}
                  </div>
                </LiquidGlassCard>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
