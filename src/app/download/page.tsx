import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Download Amp Spot Plugins',
  description: 'Download professional-grade audio plugins for free. Available for Windows and macOS. VST3, AU, and AAX formats supported.',
};

export default function DownloadPage() {
  const plugins = [
    {
      name: 'Amp Spot EQ',
      description: 'Professional parametric equalizer with smooth curves and transparent sound.',
      formats: ['VST3', 'AU', 'AAX'],
      platforms: ['Windows', 'macOS'],
    },
    {
      name: 'Amp Spot Compressor',
      description: 'Versatile dynamics processor with multiple compression modes.',
      formats: ['VST3', 'AU', 'AAX'],
      platforms: ['Windows', 'macOS'],
    },
    {
      name: 'Amp Spot Analyzer',
      description: 'Real-time spectrum analyzer and metering tool.',
      formats: ['VST3', 'AU', 'AAX'],
      platforms: ['Windows', 'macOS'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Download Amp Spot Plugins
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Get started with our professional-grade audio plugins. All plugins are free to try with full functionality.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1">
            {plugins.map((plugin) => (
              <div
                key={plugin.name}
                className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 hover:border-orange-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">{plugin.name}</h3>
                    <p className="mt-2 text-gray-400">{plugin.description}</p>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-300">Formats:</p>
                        <p className="text-sm text-gray-400">{plugin.formats.join(', ')}</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-300">Platforms:</p>
                        <p className="text-sm text-gray-400">{plugin.platforms.join(', ')}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <button className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors">
                      Download for Windows
                    </button>
                    <button className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 transition-colors">
                      Download for macOS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-600/10 border border-orange-500/20 p-8">
            <h2 className="text-2xl font-bold text-white">Installation Guide</h2>
            <div className="mt-6 space-y-4 text-gray-300">
              <div>
                <h3 className="font-semibold text-white">Windows (VST3)</h3>
                <p className="text-sm text-gray-400">
                  Extract the .zip file and copy the .vst3 file to:<br />
                  <code className="text-orange-400">C:\Program Files\Common Files\VST3\</code>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-white">macOS (AU/VST3)</h3>
                <p className="text-sm text-gray-400">
                  Open the .pkg installer and follow the installation wizard.<br />
                  Plugins will be automatically installed to the correct locations.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400">
              Need help? Check out our{' '}
              <Link href="/tutorials" className="text-orange-500 hover:text-orange-400">
                tutorials
              </Link>{' '}
              or{' '}
              <Link href="/contact" className="text-orange-500 hover:text-orange-400">
                contact support
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
