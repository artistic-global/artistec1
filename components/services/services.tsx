'use client';
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { WorldMap } from '@/components/ui/world-map';
import Lottie from 'lottie-react';
import webAnim from '@/public/animation/web.json';
import aiAnim from '@/public/animation/ai.json';
import crmAnim from '@/public/animation/crm.json';
import droneAnim from '@/public/animation/drone.json';

const services = [
  {
    animationData: webAnim,
    title: 'Website & Mobile App Development',
    description: 'Professional website and mobile application development for Android & iOS, covering UI/UX design, deployment, and modernisation of digital platforms.',
  },
  {
    animationData: aiAnim,
    title: 'AI-Powered Content',
    description: 'Generate AI-powered, UX-focused, and SEO-friendly content tailored for your digital product — effortless, effective, and conversion-ready.',
  },
  {
    animationData: crmAnim,
    title: 'AI, Automation & CRM',
    description: 'AI-powered chatbots, intelligent automation, cybersecurity, and CRM integration for existing websites, apps, and business operations.',
  },
  {
    animationData: droneAnim,
    title: 'Robotics, Drones & Smart Systems',
    description: 'Development and deployment of robotics, humanoid, and drone technologies — ready-made or fully customised systems based on client requirements.',
  },
];

const mapDots = [
  { start: { lat: 29.3759, lng: 47.9774 }, end: { lat: 42.5869, lng: -82.9194 } },
  { start: { lat: 29.3759, lng: 47.9774 }, end: { lat: 20.2961, lng: 85.8245 } },
  { start: { lat: 29.3759, lng: 47.9774 }, end: { lat: 48.8566, lng: 2.3522 } },
  { start: { lat: 20.2961, lng: 85.8245 }, end: { lat: 48.8566, lng: 2.3522 } },
];


function ServiceCard({
  animationData,
  title,
  description,
  delay = 0,
  visible,
}: {
  animationData: object;
  title: string;
  description: string;
  delay?: number;
  visible: boolean;
}) {
  return (
    <div
      className={cn(
        'group relative flex flex-col rounded-3xl overflow-hidden transition-all duration-500',
        'border border-white/55 backdrop-blur-2xl',
        'hover:border-white/75 hover:scale-[1.015]',
        !visible ? 'card-hidden' : 'card-animate',
      )}
      style={{
        animationDelay: `${delay}ms`,
        background:
          'linear-gradient(145deg, rgba(255,255,255,0.52) 0%, rgba(237,235,255,0.42) 55%, rgba(228,226,255,0.48) 100%)',
        boxShadow:
          '0 8px 32px rgba(107,111,212,0.13), 0 2px 8px rgba(107,111,212,0.08), inset 0 1.5px 0 rgba(255,255,255,0.82), inset 0 -1px 0 rgba(107,111,212,0.07)',
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,255,0.75) 0%, transparent 65%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.45) 0%, transparent 65%)' }}
      />

      <div className="h-52 w-full p-3">
        <div
          className="h-full w-full overflow-hidden rounded-2xl flex items-center justify-center"
          style={{
            background: 'rgba(255,255,255,0.38)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.55)',
          }}
        >
          <Lottie animationData={animationData} loop autoplay className="h-full w-full" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 pb-6 pt-3">
        <h3 className="text-[17px] font-semibold leading-snug tracking-[-0.025em] text-gray-900">
          {title}
        </h3>
        <p className="flex-1 text-[13px] leading-[1.75] text-gray-600">
          {description}
        </p>
        <div className="mt-1 flex items-center justify-between">
          <Image
            src="/logo.png"
            alt="Artistech"
            width={28}
            height={28}
            className="opacity-40 select-none"
          />
          <button
            className="rounded-xl border border-[#d4d0f5]/80 bg-white/50 px-5 py-2 text-[13px] font-medium text-gray-700 backdrop-blur-sm transition-all duration-200 hover:border-[#a78bfa] hover:bg-white/70 hover:text-[#7c3aed]"
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
}

const partners = [
  {
    name: 'Gulf Combined Trading',
    full: 'General Trading Contracting Co. W.L.L.',
    address: 'P.O. Box 25880, Safat 13119, Kuwait',
    flag: '🇰🇼',
  },
  {
    name: 'Aura Events and Rentals',
    full: '39789 Garfield Rd, Clinton Twp, MI 48038',
    address: 'United States',
    flag: '🇺🇸',
  },
  {
    name: 'DevSomeware Private Limited',
    full: 'Bhubaneswar, Odisha, India - 752055',
    address: 'India',
    flag: '🇮🇳',
  },
];



export default function Services() {
  const [visible, setVisible] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs1 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.05 }
    );
    const obs2 = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setMapVisible(true); }, { threshold: 0.05 }
    );
    if (sectionRef.current) obs1.observe(sectionRef.current);
    if (mapRef.current) obs2.observe(mapRef.current);
    return () => { obs1.disconnect(); obs2.disconnect(); };
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden bg-white">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0" style={{
        background:
          'radial-gradient(ellipse 70% 50% at 5% 35%, rgba(197,202,245,0.42) 0%, transparent 65%), ' +
          'radial-gradient(ellipse 45% 45% at 95% 65%, rgba(185,190,240,0.24) 0%, transparent 60%)',
      }} />

      <div className="relative z-10 mx-auto max-w-360 px-5 py-24 sm:px-8 md:px-12 lg:px-16 xl:px-24">

        <div
          className={cn('mb-12 flex flex-col items-start gap-3', !visible ? 'card-hidden' : 'card-animate')}
          style={{ animationDelay: '0ms' }}
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-gray-300" />
            <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-gray-400">What We Do</span>
          </div>
          <h2 className="max-w-2xl text-[2rem] font-semibold leading-[1.06] tracking-[-0.04em] text-gray-900 sm:text-[2.6rem] md:text-[3.2rem]">
            Full-spectrum solutions{' '}
            <span className="bg-linear-to-r from-[#6b6fd4] to-[#8b8fe8] bg-clip-text text-transparent">
              for the next era.
            </span>
          </h2>
          <p className="max-w-lg text-[14px] leading-[1.85] text-gray-500">
            From intelligent software and AI automation to physical-world robotics and smart systems — we design, build, and deliver across every technical domain Artistech operates in.
          </p>
        </div>

        <div className="relative">
          <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-16 left-1/4 h-72 w-72 rounded-full bg-[#a78bfa]/25 blur-3xl" />
            <div className="absolute top-1/3 right-10 h-56 w-56 rounded-full bg-[#6b6fd4]/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#c4b5f4]/22 blur-3xl" />
            <div className="absolute top-2/3 left-8 h-48 w-48 rounded-full bg-[#818cf8]/18 blur-3xl" />
          </div>
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <ServiceCard
                key={i}
                animationData={s.animationData}
                title={s.title}
                description={s.description}
                delay={i * 80}
                visible={visible}
              />
            ))}
          </div>
        </div>

        <div ref={mapRef} className="mt-24">
          <div
            className={cn('mb-10 flex flex-col items-start gap-3', !mapVisible ? 'card-hidden' : 'card-animate')}
            style={{ animationDelay: '0ms' }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-gray-300" />
              <span className="text-[10px] font-medium uppercase tracking-[0.34em] text-gray-400">Global Reach</span>
            </div>
            <h3 className="text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.035em] text-gray-900 sm:text-[2.2rem]">
              Headquartered in Kuwait.{' '}
              <span className="bg-linear-to-r from-[#6b6fd4] to-[#8b8fe8] bg-clip-text text-transparent">
                Operating globally.
              </span>
            </h3>
            <p className="max-w-lg text-[14px] leading-[1.85] text-gray-500">
              Our network of trusted partners spans the Middle East, South Asia, Europe, and North America — delivering to the same standard wherever you are.
            </p>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-stretch lg:gap-5">
            <div
              className={cn('lg:w-[62%] lg:shrink-0', !mapVisible ? 'card-hidden' : 'card-animate')}
              style={{ animationDelay: '80ms' }}
            >
              <div className="h-full rounded-2xl border border-[#e8eaf6] bg-[#fafafa] p-4 sm:p-5 shadow-[0_2px_20px_0_rgba(107,111,212,0.06)]">
                <WorldMap dots={mapDots} lineColor="#6b6fd4" />
              </div>
            </div>

            <div
              className={cn('flex flex-1 flex-col gap-3', !mapVisible ? 'card-hidden' : 'card-animate')}
              style={{ animationDelay: '160ms' }}
            >
              <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.32em] text-gray-400">
                Our Partners
              </p>
              {partners.map((p) => (
                <div
                  key={p.name}
                  className="group flex flex-1 items-start gap-3.5 rounded-2xl border border-[#e8eaf6] bg-white px-5 py-4 transition-all duration-300 hover:border-[#c5c8f0] hover:shadow-[0_6px_28px_0_rgba(107,111,212,0.1)]"
                >
                  <span className="mt-0.5 text-xl leading-none select-none">{p.flag}</span>
                  <div className="min-w-0">
                    <p className="text-[13.5px] font-semibold tracking-[-0.01em] text-gray-900">{p.name}</p>
                    <p className="mt-0.5 text-[12px] leading-[1.6] text-gray-500">{p.full}</p>
                    <p className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-[#8b8fe8]">
                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" className="shrink-0">
                        <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1.2"/>
                        <circle cx="6" cy="4.5" r="1" fill="currentColor"/>
                      </svg>
                      {p.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
