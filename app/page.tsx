import Header from './components/Header';
import PluginList from './components/PluginList';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full glass border border-[rgba(255,140,0,0.3)]">
            <span className="text-[#FF8C00] font-medium">🎵 Premium Audio Plugins</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Elevate Your <span className="text-[#FF8C00] amp-glow-text">Sound</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Professional-grade VST plugins designed for music producers, sound engineers, and audio enthusiasts. Transform your productions with our suite of amplifiers, effects, and utilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/plugins" 
              className="glass-button text-white font-medium px-8 py-4 rounded-lg text-lg"
            >
              Browse Plugins
            </Link>
            <Link 
              href="/pricing" 
              className="glass text-white font-medium px-8 py-4 rounded-lg text-lg hover:border-[#FF8C00] transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#FF8C00] to-[#CC7000] flex items-center justify-center amp-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Studio Quality</h3>
              <p className="text-gray-400">Designed with precision algorithms for professional audio production</p>
            </div>
            
            <div className="glass-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#FF8C00] to-[#CC7000] flex items-center justify-center amp-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Low Latency</h3>
              <p className="text-gray-400">Optimized for real-time performance with minimal CPU usage</p>
            </div>
            
            <div className="glass-card rounded-xl p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-gradient-to-br from-[#FF8C00] to-[#CC7000] flex items-center justify-center amp-glow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Cross-Platform</h3>
              <p className="text-gray-400">Available for Windows, macOS, and Linux in VST3, AU, and AAX formats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Plugins Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-white">Featured Plugins</h2>
            <Link href="/plugins" className="text-[#FF8C00] hover:text-[#FFA733] transition-colors font-medium">
              View All →
            </Link>
          </div>
          <PluginList />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto glass-card rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Sound?</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Join thousands of producers using Amp Spot plugins to create professional music
          </p>
          <Link 
            href="/pricing" 
            className="glass-button text-white font-medium px-8 py-4 rounded-lg text-lg inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[rgba(255,140,0,0.2)]">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2025 Amp Spot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
