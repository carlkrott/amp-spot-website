import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Success Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center animate-bounce">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Welcome to <span className="text-[#FF8C00]">Producer</span>!
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Your subscription is now active. Start creating amazing music today!
          </p>

          {/* Success Details */}
          <div className="glass-card rounded-2xl p-8 mb-8 text-left">
            <h2 className="text-lg font-bold text-white mb-4">Subscription Details</h2>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-300">
                <span>Plan</span>
                <span className="text-white font-medium">Producer</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Billing</span>
                <span className="text-white font-medium">Monthly ($29)</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Trial</span>
                <span className="text-[#FF8C00] font-medium">7 days free</span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>Status</span>
                <span className="text-green-400 font-medium">Active</span>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="glass-card rounded-2xl p-8 mb-8 text-left">
            <h2 className="text-lg font-bold text-white mb-4">What&apos;s Next?</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF8C00] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Download Your Plugins</h3>
                  <p className="text-gray-400 text-sm">Access all 10 premium plugins from your dashboard</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF8C00] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Install & Activate</h3>
                  <p className="text-gray-400 text-sm">Follow our installation guide for your DAW</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#FF8C00] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-white font-medium">Start Creating</h3>
                  <p className="text-gray-400 text-sm">Explore presets and tutorials to get started</p>
                </div>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="glass-button text-white font-medium px-8 py-4 rounded-lg text-lg"
            >
              Go to Dashboard
            </Link>
            <Link
              href="/plugins"
              className="glass text-white font-medium px-8 py-4 rounded-lg text-lg hover:border-[#FF8C00] transition-colors"
            >
              Browse Plugins
            </Link>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-8 px-4">
        <div className="max-w-2xl mx-auto text-center glass-card rounded-xl p-6">
          <p className="text-gray-400 mb-2">Need help getting started?</p>
          <a href="/docs" className="text-[#FF8C00] hover:text-[#FFA733] transition-colors font-medium">
            Visit our documentation →
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
