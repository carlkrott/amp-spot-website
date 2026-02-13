// Paddle-supported currencies and countries
// Based on Paddle's supported currencies: https://developer.paddle.com/concepts/sell/prices#supported-currencies

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  countries: string[];
}

export interface Country {
  code: string;
  name: string;
  currency: string;
  flag: string;
}

export const currencies: Record<string, Currency> = {
  USD: { code: 'USD', symbol: '$', name: 'US Dollar', countries: ['US'] },
  EUR: { code: 'EUR', symbol: '€', name: 'Euro', countries: ['DE', 'FR', 'ES', 'IT', 'NL', 'BE', 'AT', 'PT', 'IE', 'FI', 'GR'] },
  GBP: { code: 'GBP', symbol: '£', name: 'British Pound', countries: ['GB'] },
  CAD: { code: 'CAD', symbol: 'CA$', name: 'Canadian Dollar', countries: ['CA'] },
  AUD: { code: 'AUD', symbol: 'A$', name: 'Australian Dollar', countries: ['AU'] },
  JPY: { code: 'JPY', symbol: '¥', name: 'Japanese Yen', countries: ['JP'] },
  CNY: { code: 'CNY', symbol: '¥', name: 'Chinese Yuan', countries: ['CN'] },
  INR: { code: 'INR', symbol: '₹', name: 'Indian Rupee', countries: ['IN'] },
  BRL: { code: 'BRL', symbol: 'R$', name: 'Brazilian Real', countries: ['BR'] },
  MXN: { code: 'MXN', symbol: 'MX$', name: 'Mexican Peso', countries: ['MX'] },
  SEK: { code: 'SEK', symbol: 'kr', name: 'Swedish Krona', countries: ['SE'] },
  NOK: { code: 'NOK', symbol: 'kr', name: 'Norwegian Krone', countries: ['NO'] },
  DKK: { code: 'DKK', symbol: 'kr', name: 'Danish Krone', countries: ['DK'] },
  CHF: { code: 'CHF', symbol: 'CHF', name: 'Swiss Franc', countries: ['CH'] },
  NZD: { code: 'NZD', symbol: 'NZ$', name: 'New Zealand Dollar', countries: ['NZ'] },
  SGD: { code: 'SGD', symbol: 'S$', name: 'Singapore Dollar', countries: ['SG'] },
  HKD: { code: 'HKD', symbol: 'HK$', name: 'Hong Kong Dollar', countries: ['HK'] },
  KRW: { code: 'KRW', symbol: '₩', name: 'South Korean Won', countries: ['KR'] },
  PLN: { code: 'PLN', symbol: 'zł', name: 'Polish Zloty', countries: ['PL'] },
  CZK: { code: 'CZK', symbol: 'Kč', name: 'Czech Koruna', countries: ['CZ'] },
};

export const countries: Country[] = [
  { code: 'US', name: 'United States', currency: 'USD', flag: '🇺🇸' },
  { code: 'GB', name: 'United Kingdom', currency: 'GBP', flag: '🇬🇧' },
  { code: 'CA', name: 'Canada', currency: 'CAD', flag: '🇨🇦' },
  { code: 'AU', name: 'Australia', currency: 'AUD', flag: '🇦🇺' },
  { code: 'DE', name: 'Germany', currency: 'EUR', flag: '🇩🇪' },
  { code: 'FR', name: 'France', currency: 'EUR', flag: '🇫🇷' },
  { code: 'ES', name: 'Spain', currency: 'EUR', flag: '🇪🇸' },
  { code: 'IT', name: 'Italy', currency: 'EUR', flag: '🇮🇹' },
  { code: 'NL', name: 'Netherlands', currency: 'EUR', flag: '🇳🇱' },
  { code: 'BE', name: 'Belgium', currency: 'EUR', flag: '🇧🇪' },
  { code: 'AT', name: 'Austria', currency: 'EUR', flag: '🇦🇹' },
  { code: 'PT', name: 'Portugal', currency: 'EUR', flag: '🇵🇹' },
  { code: 'IE', name: 'Ireland', currency: 'EUR', flag: '🇮🇪' },
  { code: 'FI', name: 'Finland', currency: 'EUR', flag: '🇫🇮' },
  { code: 'GR', name: 'Greece', currency: 'EUR', flag: '🇬🇷' },
  { code: 'JP', name: 'Japan', currency: 'JPY', flag: '🇯🇵' },
  { code: 'CN', name: 'China', currency: 'CNY', flag: '🇨🇳' },
  { code: 'IN', name: 'India', currency: 'INR', flag: '🇮🇳' },
  { code: 'BR', name: 'Brazil', currency: 'BRL', flag: '🇧🇷' },
  { code: 'MX', name: 'Mexico', currency: 'MXN', flag: '🇲🇽' },
  { code: 'SE', name: 'Sweden', currency: 'SEK', flag: '🇸🇪' },
  { code: 'NO', name: 'Norway', currency: 'NOK', flag: '🇳🇴' },
  { code: 'DK', name: 'Denmark', currency: 'DKK', flag: '🇩🇰' },
  { code: 'CH', name: 'Switzerland', currency: 'CHF', flag: '🇨🇭' },
  { code: 'NZ', name: 'New Zealand', currency: 'NZD', flag: '🇳🇿' },
  { code: 'SG', name: 'Singapore', currency: 'SGD', flag: '🇸🇬' },
  { code: 'HK', name: 'Hong Kong', currency: 'HKD', flag: '🇭🇰' },
  { code: 'KR', name: 'South Korea', currency: 'KRW', flag: '🇰🇷' },
  { code: 'PL', name: 'Poland', currency: 'PLN', flag: '🇵🇱' },
  { code: 'CZ', name: 'Czech Republic', currency: 'CZK', flag: '🇨🇿' },
];

// Exchange rates (approximate, should be fetched from API in production)
// Base: USD = 1.00
export const exchangeRates: Record<string, number> = {
  USD: 1.00,
  EUR: 0.92,
  GBP: 0.79,
  CAD: 1.36,
  AUD: 1.52,
  JPY: 149.50,
  CNY: 7.24,
  INR: 83.12,
  BRL: 4.97,
  MXN: 17.08,
  SEK: 10.36,
  NOK: 10.64,
  DKK: 6.87,
  CHF: 0.88,
  NZD: 1.65,
  SGD: 1.34,
  HKD: 7.83,
  KRW: 1320.50,
  PLN: 4.02,
  CZK: 22.68,
};

export function convertPrice(priceUSD: number, targetCurrency: string): number {
  const rate = exchangeRates[targetCurrency] || 1;
  return priceUSD * rate;
}

export function formatPrice(amount: number, currencyCode: string): string {
  const currency = currencies[currencyCode];
  if (!currency) return `$${amount.toFixed(2)}`;

  // Format based on currency
  if (currencyCode === 'JPY' || currencyCode === 'KRW') {
    // No decimal places for yen and won
    return `${currency.symbol}${Math.round(amount).toLocaleString()}`;
  }

  return `${currency.symbol}${amount.toFixed(2)}`;
}

export function getCountryByCurrencyCode(currencyCode: string): Country | undefined {
  return countries.find(c => c.currency === currencyCode);
}

export function getCurrencyByCountryCode(countryCode: string): Currency | undefined {
  const country = countries.find(c => c.code === countryCode);
  if (!country) return undefined;
  return currencies[country.currency];
}

// LocalStorage helpers
const STORAGE_KEY = 'amp-spot-currency';

export function saveCurrencyPreference(currencyCode: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, currencyCode);
  }
}

export function loadCurrencyPreference(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(STORAGE_KEY) || 'USD';
  }
  return 'USD';
}

export function detectUserCurrency(): string {
  if (typeof window === 'undefined') return 'USD';

  // Try to detect from browser locale
  try {
    const locale = navigator.language || 'en-US';
    const countryCode = locale.split('-')[1]?.toUpperCase();
    
    if (countryCode) {
      const country = countries.find(c => c.code === countryCode);
      if (country) return country.currency;
    }
  } catch (e) {
    console.error('Failed to detect user currency:', e);
  }

  return 'USD';
}
