import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Development Roadmap',
  description: 'See what we are working on and what is coming next for Amp Spot plugins.',
};

export default function RoadmapPage() {
  const roadmapItems = [
    {
      status: 'completed',
      title: 'Core Plugin Suite',
      items: [
        'EQ with parametric bands',
        'Compressor with multiple modes',
        'Spectrum Analyzer',
        'M/S Processor',
      ],
      quarter: 'Q4 2024',
    },
    {
      status: 'in-progress',
      title: 'Enhanced Features',
      items: [
        'Preset management system',
        'A/B comparison mode',
        'Undo/Redo functionality',
        'Improved UI/UX',
        'Cross-platform optimization',
      ],
      quarter: 'Q1 2025',
    },
    {
      status: 'planned',
      title: 'New Plugins',
      items: [
        'Saturation/Distortion plugin',
        'Reverb with convolution',
        'Delay with modulation',
        'Limiter/Maximizer',
      ],
      quarter: 'Q2 2025',
    },
    {
      status: 'planned',
      title: 'Platform Expansion',
      items: [
        'AAX format support (Pro Tools)',
        'Linux VST3 support',
        'iPad/iOS AU support',
        'Cloud preset sync',
      ],
      quarter: 'Q3 2025',
    },
    {
      status: 'planned',
      title: 'Advanced Features',
      items: [
        'AI-powered mixing assistant',
        'Multi-band processing',
        'Advanced metering tools',
        'Integration with popular DAWs',
      ],
      quarter: 'Q4 2025',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'in-progress':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      case 'planned':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✓';
      case 'in-progress':
        return '⟳';
      case 'planned':
        return '○';
      default:
        return '?';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            Development Roadmap
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our commitment to building the best audio plugins. Here is what we have shipped and what is coming next.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="space-y-8">
            {roadmapItems.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 hover:border-orange-500/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border ${getStatusColor(item.status)}`}>
                        <span className="mr-1.5">{getStatusIcon(item.status)}</span>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1).replace('-', ' ')}
                      </span>
                      <span className="text-sm text-gray-400">{item.quarter}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                    <ul className="mt-4 space-y-2">
                      {item.items.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-gray-300">
                          <span className="text-orange-500 mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-600/10 border border-orange-500/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white">Want to Influence Our Roadmap?</h2>
            <p className="mt-4 text-gray-300">
              We value your feedback! Join our community and help shape the future of Amp Spot.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://discord.gg/ampspot"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 transition-colors"
              >
                Join Discord
              </a>
              <a
                href="https://reddit.com/r/ampspot"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors"
              >
                Join Reddit
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
