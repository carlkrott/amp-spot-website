'use client';

import React, { useState, useEffect, useCallback } from 'react';
import PluginCard, { PluginData } from './PluginCard';

interface PluginListProps {
  initialCategory?: string;
}

export default function PluginList({ initialCategory }: PluginListProps) {
  const [plugins, setPlugins] = useState<PluginData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [downloading, setDownloading] = useState<Record<number, boolean>>({});
  const [category, setCategory] = useState(initialCategory || '');

  const categories = [
    { value: '', label: 'All' },
    { value: 'amp', label: 'Amplifiers' },
    { value: 'effect', label: 'Effects' },
    { value: 'compressor', label: 'Compressors' },
    { value: 'equalizer', label: 'Equalizers' },
    { value: 'reverb', label: 'Reverbs' },
    { value: 'utility', label: 'Utilities' },
  ];

  const fetchPlugins = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams();
      if (category) params.set('category', category);
      
      const response = await fetch(`/api/plugins?${params}`);
      if (!response.ok) throw new Error('Failed to fetch plugins');
      
      const data = await response.json();
      setPlugins(data.plugins);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [category]);

  useEffect(() => {
    fetchPlugins();
  }, [fetchPlugins]);

  async function handleDownload(plugin: PluginData) {
    try {
      // Set loading state for this plugin
      setDownloading(prev => ({ ...prev, [plugin.id]: true }));

      // Log download event to API
      const response = await fetch(`/api/plugins/${plugin.id}/download`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_id: 'anonymous', // TODO: Get from auth when implemented
          platform: detectPlatform(),
          version: '1.0.0', // TODO: Use actual version
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to initiate download');
      }

      const data = await response.json();

      // Trigger browser download by opening the download URL
      window.open(data.plugin.download_url, '_blank');

      // Optional: Show success message (TODO: Replace with toast notification)
      // For now, we'll just set a timeout to clear the downloading state
      setTimeout(() => {
        setDownloading(prev => ({ ...prev, [plugin.id]: false }));
      }, 2000);

    } catch (err) {
      console.error('Download error:', err);
      setDownloading(prev => ({ ...prev, [plugin.id]: false }));
      alert('Download failed. Please try again.');
    }
  }

  // Helper function to detect user's platform
  function detectPlatform(): string {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Mac OS X')) return 'macOS';
    if (userAgent.includes('Windows')) return 'Windows';
    if (userAgent.includes('Linux')) return 'Linux';
    return 'unknown';
  }

  return (
    <div className="w-full max-w-7xl mx-auto p-4">
      <div className="mb-8 glass-card rounded-xl p-4">
        <h2 className="text-white text-lg font-semibold mb-4">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                category === cat.value
                  ? 'bg-gradient-to-r from-[#FF8C00] to-[#CC7000] text-white font-medium amp-glow'
                  : 'glass text-gray-300 hover:text-white hover:border-[#FF8C00]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {loading && (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#FF8C00]"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-900/50 border border-red-500 text-red-200 p-4 rounded-lg mb-4 glass-card">
          <p className="font-medium">Error: {error}</p>
        </div>
      )}

      {!loading && !error && plugins.length === 0 && (
        <div className="text-center text-gray-400 py-12 glass-card rounded-xl">
          <p className="text-lg">No plugins found</p>
          <p className="text-sm mt-2">Try selecting a different category</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plugins.map((plugin) => (
          <PluginCard
            key={plugin.id}
            plugin={plugin}
            onDownload={handleDownload}
            downloading={downloading[plugin.id] || false}
          />
        ))}
      </div>
    </div>
  );
}
