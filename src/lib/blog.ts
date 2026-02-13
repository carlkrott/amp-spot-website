import type { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-fix-muddy-mixes-eq-tutorial',
    title: 'How to Fix Muddy Mixes with EQ (Video Tutorial)',
    excerpt: 'Watch our step-by-step video guide on eliminating mud from your mixes using surgical EQ techniques. Learn exactly where to cut and how much.',
    content: `
# How to Fix Muddy Mixes with EQ

Muddy mixes are one of the most common problems in music production. In this video tutorial, we show you exactly how to identify and remove mud using EQ.

## Watch the Full Tutorial

<div class="aspect-video w-full bg-slate-800 rounded-xl flex items-center justify-center">
  <a href="https://youtube.com/@ampspot" target="_blank" class="text-orange-500">Watch on YouTube</a>
</div>

## Key Takeaways

### 1. Identify the Problem Frequencies
- **200-400Hz** is where most mud lives
- Use a sweeping technique to find the exact frequency
- Boost first to find, then cut to fix

### 2. Use Subtractive EQ
- Start with gentle cuts (2-4dB)
- Use moderate Q values (1-3) for natural sound
- Don't overdo it—subtle changes add up

### 3. Check in Context
- Always EQ while listening to the full mix
- Solo can be misleading
- Toggle your EQ on/off to verify improvement

### 4. Address Multiple Instruments
- Mud often comes from frequency buildup
- EQ several instruments slightly instead of one drastically
- Create separation between similar instruments

## Tools Used in This Video

We used the [Amp Spot EQ Plugin](/plugins/eq) for all demonstrations in this video. It's free to try for 14 days.

## What's Next?

Want more mixing tutorials? Subscribe to our [YouTube channel](https://youtube.com/@ampspot) and check out our [blog](/blog) for written guides.

---

*Video published February 10, 2024 • Runtime: 12:34*
`,
    author: 'Amp Spot Team',
    publishedAt: '2024-02-10',
    tags: ['Video', 'Tutorial', 'Mixing', 'EQ'],
    readTime: 4,
  },
  {
    slug: 'compression-for-beginners-masterclass',
    title: 'Compression Masterclass for Beginners (Full Video)',
    excerpt: 'Everything you need to know about compression in one comprehensive video tutorial. From basic concepts to advanced techniques.',
    content: `
# Compression Masterclass for Beginners

Compression can be intimidating for beginners, but it doesn't have to be. This video breaks down everything you need to know in simple, easy-to-understand terms.

## Watch the Full Masterclass

<div class="aspect-video w-full bg-slate-800 rounded-xl flex items-center justify-center">
  <a href="https://youtube.com/@ampspot" target="_blank" class="text-orange-500">Watch on YouTube</a>
</div>

## Topics Covered

### Part 1: Understanding Compression (0:00-8:45)
- What compression does to audio
- Why we use it in mixing and mastering
- Common misconceptions

### Part 2: The Four Main Controls (8:46-18:20)
- **Threshold**: When compression starts
- **Ratio**: How much compression applies
- **Attack**: How fast compression engages
- **Release**: How fast compression lets go

### Part 3: Practical Applications (18:21-32:15)
- Compressing vocals for consistency
- Drums: punch vs. sustain
- Bass: glue and control
- Master bus compression

### Part 4: Common Mistakes (32:16-42:00)
- Over-compressing (and how to avoid it)
- Wrong attack/release times
- Not using your ears
- Forgetting makeup gain

## Download the Session Files

Patreon supporters get access to the full session files used in this tutorial. [Join here](https://patreon.com/ampspot).

## Plugin Used

We used the [Amp Spot Compressor](/plugins/compressor) exclusively for this masterclass. Try it free for 14 days.

---

*Video published February 8, 2024 • Runtime: 42:18*
`,
    author: 'Amp Spot Team',
    publishedAt: '2024-02-08',
    tags: ['Video', 'Tutorial', 'Compression', 'Mixing'],
    readTime: 6,
  },
  {
    slug: 'amp-spot-eq-plugin-walkthrough',
    title: 'Amp Spot EQ Plugin - Complete Feature Walkthrough',
    excerpt: 'Discover every feature of our flagship EQ plugin in this detailed walkthrough video. Learn tips, tricks, and hidden features.',
    content: `
# Amp Spot EQ Plugin - Complete Walkthrough

Get to know every feature, button, and workflow tip for the Amp Spot EQ plugin in this comprehensive video guide.

## Watch the Walkthrough

<div class="aspect-video w-full bg-slate-800 rounded-xl flex items-center justify-center">
  <a href="https://youtube.com/@ampspot" target="_blank" class="text-orange-500">Watch on YouTube</a>
</div>

## Features Covered

### The Interface (0:00-5:30)
- Main display and spectrum analyzer
- Band controls and frequency selection
- Preset management

### EQ Bands Explained (5:31-15:45)
- High-pass and low-pass filters
- Parametric bands (gain, frequency, Q)
- Shelving bands
- Mid/Side processing mode

### Advanced Features (15:46-25:20)
- Spectrum analyzer overlays
- A/B comparison mode
- Undo/redo functionality
- Preset browser and favorites

### Workflow Tips (25:21-32:50)
- Keyboard shortcuts
- Quick band copying
- Saving custom presets
- Integration with your DAW

### Sound Quality & Performance (32:51-38:00)
- Zero-latency design
- CPU usage optimization
- Oversampling options
- Analog modeling (coming in v2.0)

## Hidden Features

Did you know you can:
- **Double-click** a band to solo it
- **Option/Alt + drag** to adjust Q while moving frequency
- **Shift + click** to reset a parameter to default
- **Right-click** anywhere to access quick menu

## Download & Try

The EQ plugin is available now with a free 14-day trial. [Download here](/download).

---

*Video published February 5, 2024 • Runtime: 38:42*
`,
    author: 'Amp Spot Team',
    publishedAt: '2024-02-05',
    tags: ['Video', 'Product', 'EQ', 'Tutorial'],
    readTime: 5,
  },
  {
    slug: 'introducing-amp-spot',
    title: 'Introducing Amp Spot: Pro Audio Tools for Everyone',
    excerpt: 'Professional audio plugins shouldn\'t cost a fortune. We\'re changing that with our suite of powerful, accessible tools for music producers of all levels.',
    content: `
# Introducing Amp Spot: Pro Audio Tools for Everyone

When we started Amp Spot, we had a simple mission: make professional-grade audio tools accessible to everyone, regardless of budget or experience level.

## The Problem

The audio plugin world has a problem. High-end plugins cost hundreds of dollars each, putting them out of reach for bedroom producers, students, and hobbyists. Free plugins often lack the polish and features that pros need.

We believed there had to be a middle ground.

## Our Solution

Amp Spot brings you professional-quality plugins at prices that make sense. Each plugin in our suite is designed with:

- **Transparent Algorithms**: No hidden processing, just clean audio path
- **Intuitive Interfaces**: Learn in minutes, master in hours
- **CPU-Friendly Design**: Run more instances, stay creative longer
- **Comprehensive Documentation**: Learn the why behind the what

## What's Available Now

Our Phase 1 launch includes essential mixing tools:

- **Equalizer**: Precision EQ with analog-modeled curves
- **Compressor**: Versatile dynamics control with multiple character modes
- **Analyzer**: Real-time spectrum, frequency, and correlation analysis
- **Saturation**: Harmonic richness with multiple saturation types
- **Transient Shaper**: Punch up or tame your attacks and sustain

## What's Next

We're already working on Phase 2, with more specialized tools including limiting, de-essing, and creative effects. Follow our blog for updates and tutorials.

## Try for Free

The best way to understand our approach? Try it yourself. All plugins come with a 14-day free trial—no credit card required.

[Download Now](/download)

---

*Have questions? Check our [FAQ](/faq) or [contact support](/support).*
`,
    author: 'Amp Spot Team',
    publishedAt: '2024-01-15',
    tags: ['Announcement', 'Product'],
    readTime: 3,
  },
  {
    slug: 'mid-side-processing',
    title: 'Understanding Mid/Side Processing',
    excerpt: 'Mid/Side processing is a powerful technique for mixing and mastering. Learn how it works, when to use it, and how it can transform your stereo image.',
    content: `
# Understanding Mid/Side Processing

Mid/Side (M/S) processing is one of those techniques that sounds intimidating but offers powerful creative possibilities once you understand it. Let's break it down.

## What is Mid/Side?

Traditional stereo audio has two channels: Left and Right. Mid/Side processing reorganizes this information differently:

- **Mid (Mono)**: Everything that's the same in both speakers (center-panned elements)
- **Side (Stereo)**: Everything that's different between speakers (width, reverb, stereo effects)

Mathematically:
- Mid = Left + Right
- Side = Left - Right

## Why Use M/S Processing?

M/S processing opens up several possibilities:

### 1. EQ the Center and Sides Separately
Brighten vocals without harsh cymbals. Add clarity to your bass without affecting the stereo width.

### 2. Control Stereo Width
Boost the Side channel for wider mixes. Reduce it for focused, mono-compatible tracks.

### 3. Compression Strategies
Compress the Mid differently than the Sides—gentle on the sides for preserving space, harder on the mid for glue and punch.

### 4. Saturation Tricks
Add warmth to your center elements without making the whole track muddy.

## Practical Applications

### Vocal Processing
Apply brighter EQ only to the Mid channel where vocals live. Your vocals cut through without making cymbals harsh.

### Reverb Control
Reverb typically lives in the Side channel. You can EQ or saturate it independently to clean up muddy mixes.

### Low-End Management
Bass and kick should be mono. Use M/S EQ to ensure all low-frequency energy is in the Mid channel.

## Common Pitfalls

**Don't overdo it:** Subtle M/S processing is powerful. Heavy-handed M/S manipulation can cause phase issues and mono incompatibility.

**Check mono regularly:** Always test your mixes in mono. Excessive Side processing can collapse poorly.

**Trust your ears:** M/S analysis is cool, but if it sounds wrong, it is wrong.

## Try M/S Processing

Our [Analyzer](/plugins/analyzer) includes M/S visualization to see your stereo field in real-time. And our [Equalizer](/plugins/equalizer) supports independent Mid/Side bands for precise control.

---

*Want to learn more? Check out our [other tutorials](/resources).*
`,
    author: 'Amp Spot Team',
    publishedAt: '2024-01-10',
    tags: ['Tutorial', 'Mixing', 'Mastering'],
    readTime: 5,
  },
  {
    slug: 'eq-tips-cleaner-mixes',
    title: '5 EQ Tips for Cleaner Mixes',
    excerpt: 'EQ is the most fundamental mixing tool. These five tips will help you carve out space for each element and achieve cleaner, more professional mixes.',
    content: `
# 5 EQ Tips for Cleaner Mixes

Equalization is the foundation of good mixing. Get your EQ right, and everything else falls into place. Here are five tips to level up your EQ game.

## 1. Cut Before You Boost

The golden rule of EQ: **subtractive EQ is almost always better than additive EQ**.

When something doesn't sound right, our instinct is to boost frequencies we think are missing. But most problems are caused by too much of something, not too little.

**Try this instead:**
- Need more clarity? Cut mud from 200-400Hz
- Want more presence? Cut boxiness from 500-800Hz
- Looking for air? Clean up 4-6kHz before boosting at 10kHz+

Boosts add energy and can cause buildup. Cuts create space and clarity.

## 2. Use High-Pass Filters Religiously

Most instruments don't need energy below their fundamental frequency.

**General starting points:**
- Acoustic guitars: 80-100Hz
- Electric guitars: 100-120Hz
- Vocals: 100-120Hz
- Synths/pads: 150-200Hz
- Keyboards: 100-150Hz

Even instruments with low fundamentals often benefit from HPF below 40-50Hz to remove rumble and subs you can't hear but that eat up headroom.

## 3. Find the Problem Frequencies

Instead of guessing, use a sweeping technique:

1. Boost a narrow band (Q of 5-10) by 6-10dB
2. Sweep across the frequency spectrum
3. Listen for what sounds worst
4. That's your problem frequency—cut there

This "search and destroy" approach is faster and more accurate than random adjustments.

## 4. Consider Context, Not Solo

Instruments that sound great solo often sound terrible in a mix. Inversely, something that sounds weird in isolation might sit perfectly in the full track.

**Mix in context:**
- EQ while listening to the whole mix
- Toggle your EQ on and off to hear the difference
- Check how changes affect other instruments

Your job isn't to make each instrument sound perfect alone—it's to make them work together.

## 5. Use Broad Cuts, Narrow Boosts

Different problems require different solutions:

**For cuts (removing problems):**
- Use wider bandwidth (Q of 1-3)
- Musical, natural-sounding removal
- Less phase issues

**For boosts (adding character):**
- Use narrower bandwidth (Q of 3-6)
- More surgical, intentional enhancement
- Precise control without affecting nearby frequencies

## Bonus: Use Reference Tracks

EQ in a vacuum and you'll lose perspective. Load a pro mix in your DAW and reference it throughout your process. Not to copy, but to calibrate your ears.

## Putting It Together

The [Amp Spot Equalizer](/plugins/equalizer) is designed with these principles in mind:
- Clean, musical filters for surgical cuts
- Visual feedback to see what you're doing
- Low-latency processing that doesn't color your sound

[Download the free trial](/download) and hear the difference.

---

*Questions about EQ? Join our [Discord community](/community) or browse our [tutorials](/resources).*
`,
    author: 'Amp Spot Team',
    publishedAt: '2024-01-05',
    tags: ['Tutorial', 'Mixing', 'EQ'],
    readTime: 6,
  },
];

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getLatestPosts(count: number): BlogPost[] {
  return getAllPosts().slice(0, count);
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts().filter(post => 
    post.tags.includes(tag)
  );
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  blogPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}
