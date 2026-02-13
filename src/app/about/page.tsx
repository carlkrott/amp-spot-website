import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Amp Spot',
  description: 'Learn about our mission to make professional audio tools accessible to everyone.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl bg-gradient-to-r from-orange-500 to-purple-600 bg-clip-text text-transparent">
            About Amp Spot
          </h1>
          <p className="mt-6 text-xl leading-8 text-gray-300">
            Professional audio tools for everyone, regardless of budget or experience level.
          </p>
        </div>

        <div className="prose prose-invert prose-lg max-w-none">
          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              When we started Amp Spot, we had a simple mission: make professional-grade audio tools 
              accessible to everyone, regardless of budget or experience level. The audio plugin world 
              had a problem—high-end plugins cost hundreds of dollars each, putting them out of reach 
              for bedroom producers, students, and hobbyists.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              We believed there had to be a middle ground. Professional quality shouldn't require a 
              professional budget.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">Our Values</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">•</span>
                <div>
                  <strong className="text-white">Transparency:</strong> No hidden processing, no proprietary 
                  "magic" algorithms. Clean audio path, every time.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">•</span>
                <div>
                  <strong className="text-white">Accessibility:</strong> Professional tools at prices that 
                  make sense. Free trials, affordable subscriptions, lifetime options.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">•</span>
                <div>
                  <strong className="text-white">Education:</strong> Great tools are only valuable if you 
                  know how to use them. We're committed to teaching, not just selling.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-orange-500 text-xl">•</span>
                <div>
                  <strong className="text-white">Performance:</strong> CPU-friendly design means you can 
                  run more instances and stay creative longer.
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">The Team</h2>
            <p className="text-gray-300 leading-relaxed">
              Amp Spot is built by audio engineers, producers, and developers who love music and technology. 
              We've spent years in studios, bedrooms, and basements making music—and we've felt the pain 
              of expensive software holding back creativity.
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              Our team combines expertise in DSP, user experience design, and music production to create 
              tools that sound great and feel intuitive.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-orange-500/10 to-purple-600/10 border border-orange-500/20 p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Join Our Community</h2>
            <p className="text-gray-300 mb-6">
              We're building more than plugins—we're building a community of creators who believe great 
              tools should be accessible to all.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/social"
                className="rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 transition-colors"
              >
                Follow on Social Media
              </Link>
              <Link
                href="/blog"
                className="rounded-full bg-slate-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-slate-600 transition-colors"
              >
                Read the Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
