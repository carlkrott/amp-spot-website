"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import PluginCard, { PluginData } from "../components/PluginCard";

export default function DashboardPage() {
  const [user] = useState({ name: "Producer", email: "producer@example.com" });
  const [plugins, setPlugins] = useState<PluginData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/plugins");
        const data = await response.json();
        setPlugins(data.plugins || []);
      } catch (error) {
        console.error("Failed to fetch plugins:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const stats = [
    { label: "Downloads", value: "1,234", change: "+12%" },
    { label: "Active Plugins", value: plugins.length.toString(), change: "This month" },
    { label: "Storage Used", value: "2.4 GB", change: "of 10 GB" },
    { label: "Subscription", value: "Producer", change: "Renews in 15 days" },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Dashboard Header */}
      <section className="py-8 px-4 border-b border-[rgba(255,140,0,0.2)]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-2">
            Welcome back, <span className="text-[#FF8C00]">{user.name}</span>
          </h1>
          <p className="text-gray-400">Manage your plugins and downloads</p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-6">
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-[#FF8C00] text-sm">{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Plugins */}
      <section className="pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Your Plugins</h2>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center h-32">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF8C00]"></div>
            </div>
          ) : plugins.length === 0 ? (
            <div className="glass-card rounded-xl p-12 text-center">
              <svg className="w-16 h-16 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <p className="text-gray-400 mb-4">You don&apos;t have any plugins yet</p>
              <a href="/plugins" className="glass-button text-white font-medium px-6 py-3 rounded-lg inline-block">
                Browse Plugins
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {plugins.map((plugin) => (
                <PluginCard key={plugin.id} plugin={plugin} />
              ))}
            </div>
          )}
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