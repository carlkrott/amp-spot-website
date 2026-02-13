import Header from "../components/Header";
import Link from "next/link";

const docs = [
  {
    category: "Getting Started",
    items: [
      { title: "Installation Guide", slug: "installation", description: "Learn how to install our plugins on your system" },
      { title: "Quick Start", slug: "quickstart", description: "Get up and running with your first plugin" },
      { title: "System Requirements", slug: "requirements", description: "Minimum and recommended system specifications" },
    ],
  },
  {
    category: "Plugins",
    items: [
      { title: "Amp Sim Pro", slug: "amp-sim-pro", description: "Complete amplifier simulation plugin guide" },
      { title: "Tube Compressor", slug: "tube-compressor", description: "Analog-style compression techniques" },
      { title: "Reverb Space", slug: "reverb-space", description: "Creating space and depth in your mixes" },
    ],
  },
  {
    category: "Advanced",
    items: [
      { title: "Presets Management", slug: "presets", description: "Saving, loading, and sharing presets" },
      { title: "Automation", slug: "automation", description: "Automating plugin parameters in your DAW" },
      { title: "Troubleshooting", slug: "troubleshooting", description: "Common issues and solutions" },
    ],
  },
];

export default function DocsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-[#FF8C00]">Documentation</span>
          </h1>
          <p className="text-xl text-gray-400">
            Everything you need to get the most out of Amp Spot plugins
          </p>
        </div>
      </section>

      {/* Documentation */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {docs.map((section) => (
            <div key={section.category} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-[rgba(255,140,0,0.2)] pb-2">
                {section.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.items.map((doc) => (
                  <Link
                    key={doc.slug}
                    href={`/docs/${doc.slug}`}
                    className="glass-card rounded-lg p-6 hover:border-[#FF8C00] transition-colors group"
                  >
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#FF8C00] transition-colors">
                      {doc.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{doc.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
          <p className="text-gray-400 mb-6">
            Our support team is here to help you get the most out of your plugins
          </p>
          <Link
            href="/"
            className="glass-button text-white font-medium px-6 py-3 rounded-lg inline-block"
          >
            Contact Support
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