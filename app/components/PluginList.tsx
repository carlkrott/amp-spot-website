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
  const [category, setCategory] = useState(initialCategory || '');

  const categories = ['', 'amp', 'effect', 'utility', 'general'];

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

  function handleDownload(plugin: PluginData) {
    // TODO: Implement download logic
    console.log('Download:', plugin.name);
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="mb-6 flex gap-2 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat || 'all'}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              category === cat
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            {cat || 'All'}
          </button>
        ))}
      </div>

      {loading && (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
        </div>
      )}

      {error && (
        <div className="bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-100 p-4 rounded-lg mb-4">
          {error}
        </div>
      )}

      {!loading && !error && plugins.length === 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-8">
          No plugins found
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plugins.map((plugin) => (
          <PluginCard
            key={plugin.id}
            plugin={plugin}
            onDownload={handleDownload}
          />
        ))}
      </div>
    </div>
  );
}
