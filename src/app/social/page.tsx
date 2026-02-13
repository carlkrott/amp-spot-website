'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AudioBars } from '@/components';

export default function SocialMediaPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'youtube' | 'instagram' | 'facebook'>('all');

  const socialPosts = [
    {
      id: 1,
      platform: 'youtube',
      title: 'How to Use EQ to Fix Muddy Mixes',
      description: 'Learn the secrets of carving space in your mix with EQ.',
      thumbnail: '/images/social/yt-1.jpg',
      link: 'https://youtube.com/@ampspot',
      date: '2024-02-10',
      icon: '▶️',
      color: 'bg-red-600',
    },
    {
      id: 2,
      platform: 'instagram',
      title: 'Quick Mixing Tip: High-Pass Everything',
      description: 'Except the kick and bass 👊',
      thumbnail: '/images/social/ig-1.jpg',
      link: 'https://instagram.com/ampspotaudio',
      date: '2024-02-09',
      icon: '📸',
      color: 'bg-pink-600',
    },
    {
      id: 3,
      platform: 'youtube',
      title: 'Compression Masterclass for Beginners',
      description: 'Everything you need to know to start using compression effectively.',
      thumbnail: '/images/social/yt-2.jpg',
      link: 'https://youtube.com/@ampspot',
      date: '2024-02-08',
      icon: '▶️',
      color: 'bg-red-600',
    },
    {
      id: 4,
      platform: 'facebook',
      title: 'New Plugin Update Released!',
      description: 'Version 2.1 brings performance improvements and new presets',
      thumbnail: '/images/social/fb-1.jpg',
      link: 'https://facebook.com/ampspotaudio',
      date: '2024-02-07',
      icon: '👍',
      color: 'bg-blue-600',
    },
    {
      id: 5,
      platform: 'instagram',
      title: 'Behind the Scenes: Recording Vocals',
      description: 'Watch how we capture clean vocal takes in our studio',
      thumbnail: '/images/social/ig-2.jpg',
      link: 'https://instagram.com/ampspotaudio',
      date: '2024-02-06',
      icon: '📸',
      color: 'bg-pink-600',
    },
    {
      id: 6,
      platform: 'youtube',
      title: 'Amp Spot EQ Plugin - Full Walkthrough',
      description: 'Discover all the features of our flagship EQ plugin.',
      thumbnail: '/images/social/yt-3.jpg',
      link: 'https://youtube.com/@ampspot',
      date: '2024-02-05',
      icon: '▶️',
      color: 'bg-red-600',
    },
  ];

  const upcomingContent = [
    {
      title: 'Mastering Your First Track',
      description: 'A complete guide to taking your mix to the final stage.',
      platform: 'YouTube',
      scheduledDate: 'Feb 18, 2024',
      status: 'In Production',
      statusColor: 'bg-blue-500/20 text-blue-400',
    },
    {
      title: 'Vocal Processing Tips Series',
      description: 'Multi-part series covering all aspects of vocal production.',
      platform: 'YouTube + Instagram',
      scheduledDate: 'Feb 22, 2024',
      status: 'Editing',
      statusColor: 'bg-purple-500/20 text-purple-400',
    },
    {
      title: 'Live Q&A Session',
      description: 'Join us for a live session answering your mixing questions.',
      platform: 'Facebook Live',
      scheduledDate: 'Feb 25, 2024',
      status: 'Scheduled',
      statusColor: 'bg-green-500/20 text-green-400',
    },
    {
      title: 'New Plugin Teaser',
      description: 'First look at our upcoming saturation plugin.',
      platform: 'All Platforms',
      scheduledDate: 'Mar 1, 2024',
      status: 'Planning',
      statusColor: 'bg-orange-500/20 text-orange-400',
    },
  ];

  const filteredPosts = activeTab === 'all' 
    ? socialPosts 
    : socialPosts.filter(post => post.platform === activeTab);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-purple-600 to-pink-600 py-24 sm:py-32">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <AudioBars count={20} minHeight={40} maxHeight={40} minOpacity={0.3} maxOpacity={0.7} />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Follow Amp Spot Everywhere
            </h1>
            <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl">
              Tutorials, tips, behind-the-scenes content, and community updates across all platforms
            </p>
            
            {/* Social Platform Links */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://youtube.com/@ampspot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-red-500 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
                YouTube
              </a>
              <a
                href="https://instagram.com/ampspotaudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-pink-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-pink-500 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
                Instagram
              </a>
              <a
                href="https://facebook.com/ampspotaudio"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-blue-500 transition-all"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Social Feed Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Latest Content
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Fresh updates from all our social platforms
            </p>
          </div>

          {/* Platform Filter */}
          <div className="mb-8 flex flex-wrap justify-center gap-4">
            {[
              { id: 'all', label: 'All Posts', icon: '🌐' },
              { id: 'youtube', label: 'YouTube', icon: '▶️' },
              { id: 'instagram', label: 'Instagram', icon: '📸' },
              { id: 'facebook', label: 'Facebook', icon: '👍' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`rounded-full px-6 py-2 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-lg'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Social Posts Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post) => (
              <a
                key={post.id}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-orange-500/10 hover:border-orange-500/50"
              >
                {/* Platform Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`inline-flex items-center rounded-full ${post.color} px-3 py-1 text-xs font-semibold text-white shadow-lg`}>
                    <span className="mr-1">{post.icon}</span>
                    {post.platform.charAt(0).toUpperCase() + post.platform.slice(1)}
                  </span>
                </div>

                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`rounded-full ${post.color}/80 p-4 group-hover:scale-110 transition-transform`}>
                      <svg className="h-10 w-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 line-clamp-2">
                    {post.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-gray-500">
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span className="flex items-center gap-1">
                      View Post
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Content Section */}
      <section className="py-16 sm:py-24 bg-slate-950/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Coming Soon
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Here is what we are working on for the next 2 weeks
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {upcomingContent.map((content, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm hover:border-orange-500/30 transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${content.statusColor}`}>
                      {content.status}
                    </span>
                    <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {content.scheduledDate}
                    </div>
                  </div>
                  <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse flex-shrink-0" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{content.title}</h3>
                <p className="text-sm text-gray-400 mb-4">{content.description}</p>
                <div className="flex items-center gap-2 text-xs text-orange-400 font-semibold">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  {content.platform}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-purple-600 to-pink-600 py-16 sm:py-24">
        <div className="absolute inset-0 opacity-10">
          <AudioBars count={30} minHeight={30} maxHeight={50} minOpacity={0.2} maxOpacity={0.5} />
        </div>

        <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Never Miss an Update
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Follow us on all platforms to get the latest tutorials, tips, and exclusive content
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://youtube.com/@ampspot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-orange-600 shadow-lg hover:bg-orange-50 transition-all"
            >
              Subscribe on YouTube
            </a>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-all"
            >
              Read the Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
