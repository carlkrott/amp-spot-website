import Header from "../components/Header";
import PluginList from "../components/PluginList";

export default function PluginsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our <span className="text-[#FF8C00]">Plugins</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Browse our complete collection of professional-grade audio plugins
          </p>
        </div>
      </section>

      {/* Plugin List */}
      <section className="pb-16 px-4">
        <PluginList />
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