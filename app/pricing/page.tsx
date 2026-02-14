import Header from "../components/Header";
import Footer from "../components/Footer";
import VUMeterBackground from "../components/VUMeterBackground";
import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "2 Free Plugins",
      "Basic Support",
      "Community Access",
      "VST3 Format Only",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Producer",
    price: "$29",
    period: "/month",
    description: "For serious music producers",
    features: [
      "All 10 Plugins",
      "Priority Support",
      "VST3, AU, AAX Formats",
      "Regular Updates",
      "Presets Library",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Studio",
    price: "$99",
    period: "/month",
    description: "Professional studio solution",
    features: [
      "Everything in Producer",
      "Unlimited Licenses",
      "24/7 Priority Support",
      "Custom Presets",
      "Early Access to New Plugins",
      "Commercial Use License",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-[#FF8C00]">Pricing</span>
          </h1>
          <p className="text-xl text-gray-400">
            Choose the plan that fits your production needs
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 px-4 relative">
        <VUMeterBackground />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`glass-card rounded-2xl p-8 relative ${
                  plan.popular ? "border-2 border-[#FF8C00] transform scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#FF8C00] to-[#CC7000] text-white text-sm font-bold px-4 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400">{plan.period}</span>}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-[#FF8C00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  href={plan.popular ? "/dashboard" : "/"}
                  className={`block text-center font-medium py-3 rounded-lg ${
                    plan.popular
                      ? "glass-button text-white"
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

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Can I cancel my subscription anytime?",
                a: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
              },
              {
                q: "Do you offer educational discounts?",
                a: "Yes! We offer 50% off for students and teachers. Contact us with proof of enrollment or employment.",
              },
              {
                q: "What formats are your plugins available in?",
                a: "Our plugins are available in VST3, AU, and AAX formats, compatible with all major DAWs on Windows, macOS, and Linux.",
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

      {/* Footer */}
      <Footer />
    </div>
  );
}