import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const signature = headers().get('Stripe-Signature') as string;
  const stripe = new Stripe(process.env.STRIPE_API_KEY, {
    apiVersion: '2023-08-16',
    typescript: true,
  });
  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );
  } catch (error: any) {
    return new NextResponse(`Webhook Error: ${error.message}`, {
      status: 400,
    });
  }

  const session = event.data.object as Stripe.Checkout.Session;
  console.log('❄️ ~ file: route.ts:28 ~ session:', session);

  return NextResponse.json(session, { status: 200 });
}
