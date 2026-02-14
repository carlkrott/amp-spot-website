import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Amp Spot privacy policy and data handling practices.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-12">Last updated: February 14, 2025</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-gray-300 leading-relaxed">
              Amp Spot (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy 
              explains how we collect, use, disclose, and safeguard your information when you use our 
              website, plugins, and services.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
            <div className="space-y-4 text-gray-300">
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Name and email address (when you create an account)</li>
                  <li>Payment information (processed securely through Paddle)</li>
                  <li>Usage data and analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Technical Information</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>IP address and browser type</li>
                  <li>Operating system and plugin version</li>
                  <li>Usage patterns and preferences</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>To provide and maintain our services</li>
              <li>To process transactions and send purchase confirmations</li>
              <li>To improve our products and user experience</li>
              <li>To communicate updates, promotions, and support</li>
              <li>To prevent fraud and ensure security</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Payment processors (Paddle) for transaction processing</li>
              <li>Analytics providers (Google Analytics) for usage insights</li>
              <li>Service providers who assist in our operations</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Opt-out of marketing communications</li>
              <li>Export your data in a portable format</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
            <p className="text-gray-300 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience. You can 
              control cookie preferences through your browser settings.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-8">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300 leading-relaxed">
              If you have questions about this Privacy Policy, please contact us at:{' '}
              <a href="mailto:privacy@ampspot.audio" className="text-orange-400 hover:text-orange-300">
                privacy@ampspot.audio
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
