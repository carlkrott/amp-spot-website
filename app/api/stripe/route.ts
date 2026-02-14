import { NextResponse } from 'next/server';
import redis from '@/lib/redis';
import { z } from 'zod';
import { validateRequest } from '@/lib/validations';

// This is a basic Stripe integration scaffold
// In production, you would:
// 1. Install stripe: npm install stripe
// 2. Set up webhook endpoints for payment confirmation
// 3. Implement proper error handling and security

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  interval: 'month' | 'year' | 'lifetime';
  features: string[];
}

const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    currency: 'USD',
    interval: 'lifetime',
    features: [
      'Access to free plugins',
      'Community support',
      'Basic presets',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    currency: 'USD',
    interval: 'month',
    features: [
      'All premium plugins',
      'Priority support',
      'Advanced presets',
      'Early access to new releases',
      'Commercial license',
    ],
  },
  {
    id: 'studio',
    name: 'Studio',
    price: 299,
    currency: 'USD',
    interval: 'year',
    features: [
      'All Pro features',
      '2 months free',
      'Dedicated support',
      'Custom preset creation',
      'Team collaboration (up to 5 users)',
    ],
  },
];

// Stripe checkout validation schema
const StripeCheckoutSchema = z.object({
  plan_id: z.string().min(1, 'Plan ID is required').refine(val => ['free', 'pro', 'studio'].includes(val), {
    message: 'Invalid plan_id. Must be: free, pro, or studio',
  }),
  user_email: z.string().email('Invalid email address').min(1, 'User email is required'),
  user_id: z.string().max(100).optional(),
  success_url: z.string().url('Invalid success URL').optional(),
  cancel_url: z.string().url('Invalid cancel URL').optional(),
});

// Stripe payment verification schema
const StripeVerifySchema = z.object({
  session_id: z.string().min(1, 'Session ID is required').max(255),
});

// GET /api/stripe - Get pricing plans
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const planId = searchParams.get('plan_id');

    // Validate plan_id if provided
    if (planId) {
      const planValidation = z.string().refine(val => ['free', 'pro', 'studio'].includes(val), {
        message: 'Invalid plan_id. Must be: free, pro, or studio',
      }).safeParse(planId);
      
      if (!planValidation.success) {
        return NextResponse.json(
          { error: planValidation.error.issues[0].message },
          { status: 400 }
        );
      }

      const plan = PRICING_PLANS.find(p => p.id === planId);
      if (!plan) {
        return NextResponse.json(
          { error: 'Plan not found' },
          { status: 404 }
        );
      }
      return NextResponse.json(plan);
    }

    return NextResponse.json({
      plans: PRICING_PLANS,
    });
  } catch (error) {
    console.error('Failed to fetch pricing plans:', error);
    return NextResponse.json(
      { error: 'Failed to fetch pricing plans' },
      { status: 500 }
    );
  }
}

// POST /api/stripe - Create checkout session
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validation = validateRequest(StripeCheckoutSchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { plan_id, user_email, user_id, success_url, cancel_url } = validation.data;

    const plan = PRICING_PLANS.find(p => p.id === plan_id);
    if (!plan) {
      return NextResponse.json(
        { error: 'Invalid plan ID' },
        { status: 400 }
      );
    }

    if (plan.price === 0) {
      // Free plan - no payment needed
      return NextResponse.json({
        success: true,
        message: 'Free plan activated',
        plan,
      });
    }

    // In a real implementation, create a Stripe checkout session:
    /*
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: plan.currency.toLowerCase(),
          product_data: {
            name: plan.name,
            description: plan.features.join(', '),
          },
          unit_amount: plan.price * 100, // Stripe uses cents
          recurring: plan.interval !== 'lifetime' ? {
            interval: plan.interval,
          } : undefined,
        },
        quantity: 1,
      }],
      mode: plan.interval === 'lifetime' ? 'payment' : 'subscription',
      success_url: success_url || `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancel_url || `${process.env.NEXT_PUBLIC_BASE_URL}/pricing`,
      customer_email: user_email,
      metadata: {
        user_id: user_id || '',
        plan_id,
      },
    });

    return NextResponse.json({
      session_id: session.id,
      checkout_url: session.url,
    });
    */

    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Used in Stripe implementation above
    const _stripeUrls = { success_url, cancel_url };

    // Mock response for development
    const mockSessionId = `mock_session_${Date.now()}`;
    const checkoutData = {
      session_id: mockSessionId,
      plan,
      user_email,
      user_id,
      timestamp: new Date().toISOString(),
    };

    // Store in Redis for 1 hour
    await redis.setex(
      `checkout:${mockSessionId}`,
      3600,
      JSON.stringify(checkoutData)
    );

    return NextResponse.json({
      session_id: mockSessionId,
      checkout_url: `/checkout/${mockSessionId}`,
      message: 'Mock checkout session created (Stripe integration pending)',
      plan,
    });
  } catch (error) {
    console.error('Failed to create checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

// PUT /api/stripe - Verify payment (webhook handler in production)
export async function PUT(request: Request) {
  try {
    const body = await request.json();
    
    // Validate request body
    const validation = validateRequest(StripeVerifySchema, body);
    if (!validation.success) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const { session_id } = validation.data;

    // Get checkout data from Redis
    const checkoutData = await redis.get(`checkout:${session_id}`);
    
    if (!checkoutData) {
      return NextResponse.json(
        { error: 'Checkout session not found or expired' },
        { status: 404 }
      );
    }

    const checkout = JSON.parse(checkoutData);

    // In production, verify with Stripe:
    /*
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const session = await stripe.checkout.sessions.retrieve(session_id);
    
    if (session.payment_status === 'paid') {
      // Update user subscription in database
      await query(
        'INSERT INTO subscriptions (user_id, plan_id, status, expires_at) VALUES ($1, $2, $3, $4)',
        [checkout.user_id, checkout.plan.id, 'active', calculateExpiryDate(checkout.plan)]
      );
    }
    */

    return NextResponse.json({
      success: true,
      message: 'Payment verified (mock)',
      checkout,
    });
  } catch (error) {
    console.error('Failed to verify payment:', error);
    return NextResponse.json(
      { error: 'Failed to verify payment' },
      { status: 500 }
    );
  }
}
