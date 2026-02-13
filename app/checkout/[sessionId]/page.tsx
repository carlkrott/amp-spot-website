import Header from "../../components/Header";

interface CheckoutPageProps {
  params: Promise<{ sessionId: string }>;
}

export default async function CheckoutPage({ params }: CheckoutPageProps) {
  // const { sessionId } = await params;
  await params; // Await params to comply with Next.js 16 requirements

  // In a real implementation, you would:
  // 1. Verify the checkout session with Stripe
  // 2. Get session details including line items and amount

  // For now, we&apos;ll show a checkout page with mock data
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Checkout Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">
            <span className="text-[#FF8C00]">Checkout</span>
          </h1>
          <p className="text-gray-400">Complete your subscription to access all premium plugins</p>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="pb-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="glass-card rounded-2xl p-8">
              <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-4 border-b border-[rgba(255,140,0,0.2)]">
                  <div>
                    <h3 className="text-white font-medium">Producer Plan</h3>
                    <p className="text-gray-400 text-sm">Monthly subscription</p>
                  </div>
                  <span className="text-white font-bold">$29.00</span>
                </div>
                
                <div className="flex justify-between items-center py-4 border-b border-[rgba(255,140,0,0.2)]">
                  <div>
                    <h3 className="text-white font-medium">7-day free trial</h3>
                    <p className="text-gray-400 text-sm">No payment until trial ends</p>
                  </div>
                  <span className="text-[#FF8C00]">FREE</span>
                </div>
              </div>

              {/* What you get */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-white mb-4">What you&apos;ll get:</h3>
                <ul className="space-y-2">
                  {[
                    "All 10 Premium Plugins",
                    "Priority Support",
                    "VST3, AU, AAX Formats",
                    "Regular Updates",
                    "Presets Library",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <svg className="w-5 h-5 text-[#FF8C00] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment Method Placeholder */}
              <div>
                <h3 className="text-lg font-bold text-white mb-4">Payment Method</h3>
                <div className="glass rounded-xl p-6 flex items-center justify-center">
                  <div className="text-center text-gray-400">
                    <svg className="w-12 h-12 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <p>Secure payment powered by Stripe</p>
                    <p className="text-sm mt-1">Cards processed securely</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Total */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-8 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6">Order Total</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-400">
                  <span>Subtotal</span>
                  <span>$29.00</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-[#FF8C00]">
                  <span>Trial discount</span>
                  <span>-$29.00</span>
                </div>
              </div>

              <div className="border-t border-[rgba(255,140,0,0.2)] pt-4 mb-6">
                <div className="flex justify-between text-white font-bold text-2xl">
                  <span>Total</span>
                  <span>$0.00</span>
                </div>
                <p className="text-gray-400 text-sm mt-2">Charged after 7-day trial</p>
              </div>

              <a
                href="/success"
                className="block w-full glass-button text-white font-medium py-4 rounded-lg text-center"
              >
                Start Free Trial
              </a>

              <p className="text-gray-500 text-xs text-center mt-4">
                By subscribing, you agree to our{' '}
                <a href="#" className="text-[#FF8C00] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#FF8C00] hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[rgba(255,140,0,0.2)]">
        <div className="max-w-6xl mx-auto text-center text-gray-500">
          <p>&copy; 2025 Amp Spot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
