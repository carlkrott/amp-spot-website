'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import LEDMeterBar from './LEDMeterBar';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/plugins', label: 'Plugins' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/docs', label: 'Documentation' },
    { href: '/youtube', label: 'YouTube' },
  ];

  return (
    <>
      <header className="glass sticky top-0 z-50 border-b border-[rgba(255,140,0,0.2)] pointer-events-auto">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center relative">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFA733"/>
                    <stop offset="50%" stopColor="#FF8C00"/>
                    <stop offset="100%" stopColor="#CC7000"/>
                  </linearGradient>
                </defs>
                <rect x="6" y="68" width="88" height="24" rx="4" fill="#CC7000"/>
                <rect x="10" y="72" width="80" height="2" rx="1" fill="#FF8C00" opacity={0.6}/>
                <rect x="10" y="38" width="20" height="35" rx="3" fill="url(#logoGrad)"/>
                <rect x="14" y="42" width="12" height="2" rx="1" fill="#FFA733" opacity={0.7}/>
                <rect x="40" y="14" width="20" height="59" rx="3" fill="url(#logoGrad)"/>
                <rect x="44" y="18" width="12" height="2" rx="1" fill="#FFA733" opacity={0.8}/>
                <rect x="70" y="32" width="20" height="41" rx="3" fill="url(#logoGrad)"/>
                <rect x="74" y="36" width="12" height="2" rx="1" fill="#FFA733" opacity={0.7}/>
              </svg>
              <span className="text-xl font-bold text-white amp-glow-text">
                Amp<span className="text-[#FF8C00]">Spot</span>
              </span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#FF8C00] transition-colors font-medium relative group pointer-events-auto cursor-pointer"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF8C00] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
            <Link
              href="/dashboard"
              className="glass-button text-white font-medium px-5 py-2 rounded-lg pointer-events-auto cursor-pointer"
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 p-2 hover:text-[#FF8C00] transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[rgba(255,140,0,0.2)] glass-card mt-2 rounded-lg pointer-events-auto z-50">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 px-4 text-gray-300 hover:text-[#FF8C00] hover:bg-[rgba(255,140,0,0.1)] rounded transition-colors pointer-events-auto cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/dashboard"
              className="block mt-2 mx-4 glass-button text-white font-medium py-2 rounded-lg text-center pointer-events-auto cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        )}
      </nav>
    </header>
    <LEDMeterBar />
    </>
  );
}
