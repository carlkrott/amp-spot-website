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
  downloading?: boolean;
}

export default function PluginCard({ plugin, onDownload, downloading = false }: PluginCardProps) {
  const categoryColors: Record<string, string> = {
    amp: 'from-[#FF8C00] to-[#CC7000]',
    effect: 'from-blue-500 to-blue-700',
    utility: 'from-green-500 to-green-700',
    general: 'from-gray-500 to-gray-700',
    compressor: 'from-purple-500 to-purple-700',
    equalizer: 'from-pink-500 to-pink-700',
    reverb: 'from-cyan-500 to-cyan-700',
  };

  const gradientClass = categoryColors[plugin.category] || categoryColors.general;

  return (
    <div className="glass-card rounded-xl p-6 hover:scale-[1.02] transition-all duration-300 group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-[#FF8C00] transition-colors">
          {plugin.name}
        </h3>
        <span className={`bg-gradient-to-r ${gradientClass} text-white text-xs px-3 py-1 rounded-full font-medium`}>
          {plugin.category}
        </span>
      </div>
      
      <p className="text-gray-400 mb-4 line-clamp-2 h-12">
        {plugin.description || 'No description available'}
      </p>
      
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4 py-2 border-t border-b border-[rgba(255,140,0,0.1)]">
        <span className="text-gray-400">v{plugin.version}</span>
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          {plugin.download_count.toLocaleString()}
        </span>
      </div>
      
      <button
        onClick={() => onDownload?.(plugin)}
        disabled={downloading}
        className={`w-full glass-button text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 ${
          downloading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {downloading ? (
          <>
            <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Downloading...
          </>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </>
        )}
      </button>
    </div>
  );
}
