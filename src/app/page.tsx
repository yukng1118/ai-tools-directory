'use client'

import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import { tools, categories } from '@/lib/static-data'
import { ArrowRight, Sparkles, Zap, Target, Layers } from 'lucide-react'

export default function HomePage() {
  const featuredTools = tools.filter(t => t.featured).slice(0, 6)
  const latestTools = tools.slice(-4).reverse()
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-reveal')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  const stats = [
    { value: tools.length.toString(), label: 'AI Tools', suffix: '+' },
    { value: categories.length.toString(), label: 'Categories', suffix: '' },
    { value: '100', label: 'Newsletter', suffix: '+' },
  ]

  return (
    <main className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-violet)] flex items-center justify-center">
                <Zap className="w-5 h-5 text-[var(--void)]" />
              </div>
              <span className="font-display font-bold text-xl text-[var(--pure)]">
                AI Tools<span className="gradient-text-cyan">.</span>
              </span>
            </Link>
            
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: 'Directory', href: '/directory', highlight: false },
                { label: 'Newsletter', href: '/newsletter', highlight: true },
                { label: 'Submit', href: '/submit', highlight: false },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors group ${
                    item.highlight 
                      ? 'text-[var(--neon-cyan)]' 
                      : 'text-[var(--mist)] hover:text-[var(--pure)]'
                  }`}
                >
                  {item.label}
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-magenta)] group-hover:w-full transition-all duration-300 ${
                    item.highlight ? 'w-full' : ''
                  }`} />
                </Link>
              ))}
            </div>
            
            <Link 
              href="/directory"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-violet)] text-[var(--void)] font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Explore
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20"
        style={{ perspective: '1000px' }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[var(--neon-cyan)] rounded-full blur-[150px] opacity-20" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[var(--neon-magenta)] rounded-full blur-[150px] opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--neon-violet)] rounded-full blur-[200px] opacity-10" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div 
              className={`space-y-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              {/* Badge */}
              <div 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light"
                style={{ animationDelay: '0.1s' }}
              >
                <Sparkles className="w-4 h-4 text-[var(--neon-amber)]" />
                <span className="text-xs font-medium text-[var(--mist)]">
                  2026 Edition — {tools.length}+ AI Tools
                </span>
              </div>
              
              {/* Headline */}
              <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[0.9] tracking-tight">
                <span className="block text-[var(--pure)]">Discover</span>
                <span className="block gradient-text-cyan">AI Tools</span>
                <span className="block text-[var(--pure)]">by
                  <span className="relative inline-block ml-4">
                    Use Case
                    <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                      <path d="M2 10C50 2 100 2 150 6C200 10 250 10 298 2" stroke="url(#line-gradient)" strokeWidth="3" strokeLinecap="round"/>
                      <defs>
                        <linearGradient id="line-gradient" x1="0" y1="0" x2="300" y2="0">
                          <stop stopColor="var(--neon-cyan)"/>
                          <stop offset="1" stopColor="var(--neon-magenta)"/>
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-lg md:text-xl text-[var(--mist)] max-w-lg leading-relaxed">
                Curated collection of the best AI tools organized by specific workflows. 
                Find exactly what you need, faster.
              </p>
              
              {/* CTAs */}
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/directory"
                  className="group flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[var(--neon-cyan)] to-[var(--neon-violet)] text-[var(--void)] font-bold text-base hover:scale-105 transition-transform"
                >
                  Browse Directory
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/newsletter"
                  className="flex items-center gap-3 px-8 py-4 rounded-full glass-light text-[var(--pure)] font-semibold text-base hover:bg-white/5 transition-colors"
                >
                  <Sparkles className="w-5 h-5 text-[var(--neon-amber)]" />
                  Join Newsletter
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-12 pt-8">
                {stats.map((stat, i) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items