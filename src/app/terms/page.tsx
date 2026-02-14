import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Amp Spot terms of service and usage agreement.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
          Terms of Service
        </h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: February 14, 2025</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing or using Amp Spot plugins and services, you agree to be bound by these 
              Terms of Service. If you disagree with any part of these terms, you may not use our services.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">License Grant</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Free Trial</h3>
                <p>
                  Free trial licenses are for evaluation purposes only. Commercial use requires a 
                  paid license.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Premium Subscription</h3>
                <p>
                  Grants you a non-exclusive, non-transferable license to use all Amp Spot plugins 
                  for the duration of your subscription, including commercial use.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Lifetime License</h3>
                <p>
                  Grants you a perpetual, non-exclusive license to use all current Amp Spot plugins, 
                  including commercial use. May be transferred once.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Restrictions</h2>
            <p className="text-gray-300 mb-4">You may not:</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Reverse engineer, decompile, or disassemble the plugins</li>
              <li>Redistribute, resell, or sublicense the plugins</li>
              <li>Remove or alter any copyright notices</li>
              <li>Use the plugins to create competing products</li>
              <li>Share your license with others</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Subscriptions and Billing</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Subscriptions automatically renew unless canceled. You may cancel at any time, and 
                your access will continue until the end of your billing period.
              </p>
              <p>
                We offer a 14-day money-back guarantee on all paid plans. Refund requests must be 
                made within 14 days of purchase.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Updates and Support</h2>
            <p className="text-gray-300 leading-relaxed">
              Premium subscribers receive free updates and priority support for the duration of their 
              subscription. Lifetime license holders receive free updates for all plugins purchased 
              during their license period.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-300 leading-relaxed">
              Amp Spot plugins are provided &ldquo;as is&rdquo; without warranty of any kind, either express or 
              implied, including but not limited to warranties of merchantability, fitness for a 
              particular purpose, or non-infringement.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              In no event shall Amp Spot be liable for any indirect, incidental, special, consequential, 
              or punitive damages, including loss of profits, data, or other intangible losses.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Changes to Terms</h2>
            <p className="text-gray-300 leading-relaxed">
              We reserve the right to modify these terms at any time. We will notify users of 
              significant changes via email or through the website.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact</h2>
            <p className="text-gray-300 leading-relaxed">
              Questions about these terms? Contact us at:{' '}
              <a href="mailto:legal@ampspot.audio" className="text-orange-400 hover:text-orange-300">
                legal@ampspot.audio
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
