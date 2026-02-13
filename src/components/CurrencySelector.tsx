'use client';

import { useState, useEffect, useRef } from 'react';
import { countries, currencies, saveCurrencyPreference, loadCurrencyPreference, detectUserCurrency } from '@/lib/currency';

interface CurrencySelectorProps {
  onCurrencyChange?: (currencyCode: string) => void;
}

export function CurrencySelector({ onCurrencyChange }: CurrencySelectorProps) {
  const [selectedCurrency, setSelectedCurrency] = useState('USD');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load saved preference or detect user's currency
    const saved = loadCurrencyPreference();
    const detected = saved === 'USD' ? detectUserCurrency() : saved;
    setSelectedCurrency(detected);
    if (detected !== 'USD') {
      saveCurrencyPreference(detected);
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCurrencySelect = (currencyCode: string) => {
    setSelectedCurrency(currencyCode);
    saveCurrencyPreference(currencyCode);
    setIsOpen(false);
    
    if (onCurrencyChange) {
      onCurrencyChange(currencyCode);
    }

    // Trigger custom event for other components to listen
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('currencyChange', { detail: { currency: currencyCode } }));
    }
  };

  const selectedCountry = countries.find(c => c.currency === selectedCurrency);
  const currency = currencies[selectedCurrency];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-lg bg-slate-800/50 backdrop-blur-sm border border-slate-700 px-3 py-2 text-sm font-medium text-white hover:bg-slate-700/50 hover:border-orange-500/50 transition-all duration-200"
        aria-label="Select currency"
      >
        <span className="text-lg">{selectedCountry?.flag || '🌍'}</span>
        <span className="hidden sm:inline">{currency?.symbol || '$'}</span>
        <span className="font-semibold">{selectedCurrency}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 max-h-96 overflow-y-auto rounded-xl bg-slate-800 border border-slate-700 shadow-2xl z-50 backdrop-blur-xl">
          <div className="p-2">
            <div className="px-3 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Select Currency
            </div>
            <div className="space-y-1">
              {countries.map((country) => {
                const curr = currencies[country.currency];
                const isSelected = selectedCurrency === country.currency;
                
                return (
                  <button
                    key={country.code}
                    onClick={() => handleCurrencySelect(country.currency)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all ${
                      isSelected
                        ? 'bg-orange-600 text-white'
                        : 'hover:bg-slate-700 text-gray-300'
                    }`}
                  >
                    <span className="text-xl">{country.flag}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium truncate">{country.name}</div>
                      <div className="text-xs text-gray-400">{curr?.name}</div>
                    </div>
                    <div className="font-semibold">{curr?.symbol}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
