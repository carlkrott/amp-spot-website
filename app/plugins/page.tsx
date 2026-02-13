import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const plugins = [
  {
    id: "eq",
    name: "Amp Spot EQ",
    version: "0.1.0",
    description: "7-band parametric equalizer with analog-modeled circuits, spectrum visualization, and dynamic EQ capabilities.",
    category: "equalizer",
    status: "in-development",
    features: ["7-band parametric EQ", "Analog circuit modeling", "Spectrum analyzer", "Dynamic EQ", "Mid/Side mode"],
  },
  {
    id: "comp",
    name: "Amp Spot Comp",
    version: "0.1.0",
    description: "Analog-style optical compressor with real-time VU metering, variable compression curves, and sidechain input.",
    category: "compressor",
    status: "in-development",
    features: ["Optical compression", "Real-time VU meter", "Variable attack/release", "Sidechain support", "Mix knob for parallel"],
  },
  {
    id: "analyzer",
    name: "Amp Spot Analyzer",
    version: "0.1.0",
    description: "Professional spectrum analyzer with real-time frequency visualization, spectral editing, and correlation metering.",
    category: "utility",
    status: "in-development",
    features: ["Real-time spectrum", "FFT sizes 512-16384", "Correlation meter", "Peak/RMS modes", "Spectral hold"],
  },
  {
    id: "ms",
    name: "Amp Spot MS",
    version: "0.1.0",
    description: "Mid/Side processor for width control, imaging, and creative mixing techniques with stereo field manipulation.",
    category: "utility",
    status: "in-development",
    features: ["Mid/Side encode/decode", "Width control", "Stereo imager", "Frequency-dependent M/S", "Mono bass filter"],
  },
];

const categoryColors: Record<string, string> = {
  equalizer: 'from-pink-500 to-pink-700',
  compressor: 'from-purple-500 to-purple-700',
  utility: 'from-green-500 to-green-700',
  effect: 'from-blue-500 to-blue-700',
  amp: 'from-[#FF8C00] to-[#CC7000]',
};

export default function PluginsPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 rounded-full glass border border-[rgba(255,140,0,0.3)]">
            <span className="text-[#FF8C00] font-medium">🔧 In Development</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#FF8C00]">Plugins</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Professional audio plugins built with warm analog-inspired sound and modern precision.
            All plugins are currently in active development.
          </p>
        </div>
      </section>

      {/* Plugin List */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plugins.map((plugin) => (
              <div
                key={plugin.id}
                className="glass-card rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group"
              >
                {/* Status Banner */}
                <div className="bg-gradient-to-r from-[#FF8C00]/20 to-[#CC7000]/20 border-b border-[rgba(255,140,0,0.2)] px-4 py-2">
                  <span className="inline-flex items-center gap-2 text-[#FF8C00] text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#FF8C00] animate-pulse" />
                    In Development - Coming Soon
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#FF8C00] transition-colors">
                      {plugin.name}
                    </h3>
                    <span className={`bg-gradient-to-r ${categoryColors[plugin.category]} text-white text-xs px-3 py-1 rounded-full font-medium`}>
                      {plugin.category}
                    </span>
                  </div>

                  <p className="text-gray-400 mb-6">
                    {plugin.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {plugin.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-400 text-sm">
                          <svg className="w-4 h-4 text-[#FF8C00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-[rgba(255,140,0,0.1)]">
                    <span className="text-gray-500 text-sm">v{plugin.version}</span>
                    <Link
                      href="/subscription"
                      className="glass-button text-white font-medium px-6 py-2 rounded-lg inline-flex items-center gap-2 opacity-80 cursor-not-allowed"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Coming Soon
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Access CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-12 text-center border-2 border-[rgba(255,140,0,0.3)]">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join the <span className="text-[#FF8C00]">Beta Program</span>
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Get early access to our plugins and help shape their development. Beta testers receive free access to all plugins during development.
            </p>
            <Link
              href="/subscription"
              className="glass-button text-white font-medium px-8 py-4 rounded-lg text-lg inline-block"
            >
              Join Beta Program
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}