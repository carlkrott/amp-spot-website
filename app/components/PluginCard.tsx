'use client';

import React from 'react';

export interface PluginData {
  id: number;
  name: string;
  version: string;
  description: string;
  category: string;
  download_count: number;
  created_at: string;
  updated_at: string;
}

interface PluginCardProps {
  plugin: PluginData;
  onDownload?: (plugin: PluginData) => void;
}

export default function PluginCard({ plugin, onDownload }: PluginCardProps) {
  const categoryColors: Record<string, string> = {
    amp: 'bg-orange-500',
    effect: 'bg-blue-500',
    utility: 'bg-green-500',
    general: 'bg-gray-500',
  };

  const bgColor = categoryColors[plugin.category] || categoryColors.general;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {plugin.name}
        </h3>
        <span className={`${bgColor} text-white text-xs px-2 py-1 rounded-full`}>
          {plugin.category}
        </span>
      </div>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
        {plugin.description || 'No description available'}
      </p>
      
      <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
        <span>v{plugin.version}</span>
        <span>{plugin.download_count.toLocaleString()} downloads</span>
      </div>
      
      <button
        onClick={() => onDownload?.(plugin)}
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
      >
        Download
      </button>
    </div>
  );
}
