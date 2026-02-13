import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const plans = [
  {
    name: "Free Tier",
    price: "$0",
    description: "Perfect for hobbyists and beginners",
    features: [
      "Access to Amp Spot EQ (Beta)",
      "Access to Amp Spot Comp (Beta)",
      "Basic Support via Discord",
      "Community Presets",
      "VST3 Format Only",
    ],
    limitations: [
      "No commercial use license",
      "No priority updates",
      "Limited to 2 plugins",
    ],
    cta: "Get Started Free",
    popular: false,
    comingSoon: false,
  },
  {
    name: "Producer Tier",
    price: "$9",
    period: "/month",
    description: "For serious music producers",
    features: [
      "All 4 Plugins (Full Access)",
      "Priority Support",
      "VST3 & AU Formats",
      "Regular Updates",
      "Commercial Use License",
      "Pro Presets Library",
      "Early Access to New Features",
    ],
    limitations: [],
    cta: "Start Free Trial",
    popular: true,
    comingSoon: false,
  },
  {
    name: "Studio Tier",
    price: "$29",
    period: "/month",
    description: "Professional studio solution",
    features: [
      "Everything in Producer Tier",
      "Unlimited Licenses",
      "24/7 Priority Support",
      "Custom Plugin Presets",
      "Beta Access to New Plugins",
      "Commercial Use with Attribution",
      "API Access",
    ],
    limitations: [],
    cta: "Coming Soon",
    popular: false,
    comingSoon: true,
  },
];

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Page Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full glass border border-[rgba(255,140,0,0.3)]">
            <span className="text-[#FF8C00] font-medium">🎛️ Choose Your Plan</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Free vs <span className="text-[#FF8C00]">Paid</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start with our free tier to get familiar with our plugins, then upgrade when you're ready for more power and features.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card rounded-2xl p-8 relative ${
                  plan.popular ? "border-2 border-[#FF8C00] transform scale-105" : ""
                } ${plan.comingSoon ? "opacity-75" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#FF8C00] to-[#CC7000] text-white text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                {plan.comingSoon && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-gray-600 to-gray-700 text-white text-sm font-bold px-4 py-1 rounded-full">
                      COMING SOON
                    </span>
                  </div>
                )}

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>

                <ul className="space-y-3 mb-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {plan.limitations.length > 0 && (
                  <ul className="space-y-2 mb-8">
                    {plan.limitations.map((limit) => (
                      <li key={limit} className="flex items-center gap-3 text-gray-500 text-sm">
                        <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        {limit}
                      </li>
                    ))}
                  </ul>
                )}

                <Link
                  href={plan.comingSoon ? "#" : (plan.popular ? "/pricing" : "/plugins")}
                  className={`block text-center font-medium py-3 rounded-lg ${
                    plan.popular
                      ? "glass-button text-white"
                      : plan.comingSoon
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "glass text-white hover:border-[#FF8C00] transition-colors"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Feature Comparison
          </h2>
          <div className="glass-card rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[rgba(255,140,0,0.2)]">
                  <th className="text-left text-gray-400 font-medium p-4">Feature</th>
                  <th className="text-center text-gray-400 font-medium p-4">Free</th>
                  <th className="text-center text-[#FF8C00] font-bold p-4">Producer</th>
                  <th className="text-center text-gray-400 font-medium p-4">Studio</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Amp Spot EQ", free: "Beta", producer: "✓", studio: "✓" },
                  { feature: "Amp Spot Comp", free: "Beta", producer: "✓", studio: "✓" },
                  { feature: "Amp Spot Analyzer", free: "✕", producer: "✓", studio: "✓" },
                  { feature: "Amp Spot MS", free: "✕", producer: "✓", studio: "✓" },
                  { feature: "Commercial License", free: "✕", producer: "✓", studio: "✓" },
                  { feature: "VST3 Format", free: "✓", producer: "✓", studio: "✓" },
                  { feature: "AU Format", free: "✕", producer: "✓", studio: "✓" },
                  { feature: "Priority Support", free: "✕", producer: "✓", studio: "✓✓" },
                  { feature: "API Access", free: "✕", producer: "✕", studio: "✓" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-[rgba(255,140,0,0.1)] last:border-0">
                    <td className="text-white p-4">{row.feature}</td>
                    <td className="text-center text-gray-400 p-4">{row.free}</td>
                    <td className="text-center text-[#FF8C00] p-4">{row.producer}</td>
                    <td className="text-center text-gray-400 p-4">{row.studio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "What's the difference between Free and Paid tiers?",
                a: "The Free tier gives you beta access to Amp Spot EQ and Comp for non-commercial use. The Producer tier unlocks all plugins, includes a commercial license, and provides priority support.",
              },
              {
                q: "Can I use the Free tier plugins in my music?",
                a: "Free tier plugins are for personal/non-commercial use only. If you want to release music commercially, you'll need the Producer or Studio tier.",
              },
              {
                q: "What does 'Beta' mean?",
                a: "Beta plugins are still in development and may have bugs or missing features. Beta testers get early access and help us improve the plugins before official release.",
              },
              {
                q: "Can I upgrade from Free to Paid later?",
                a: "Yes! You can upgrade at any time. Your progress and presets will carry over to the paid tier.",
              },
              {
                q: "Do you offer refunds?",
                a: "Yes, we offer a 14-day money-back guarantee. If you're not satisfied, contact support for a full refund.",
              },
            ].map((faq, i) => (
              <div key={i} className="glass-card rounded-lg p-6">
                <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Start?</h2>
          <p className="text-gray-400 mb-6">
            Join thousands of producers using Amp Spot plugins to create professional music
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plugins"
              className="glass-button text-white font-medium px-8 py-4 rounded-lg text-lg inline-block"
            >
              Get Started Free
            </Link>
            <Link
              href="/pricing"
              className="glass text-white font-medium px-8 py-4 rounded-lg text-lg inline-block hover:border-[#FF8C00] transition-colors"
            >
              View Full Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
