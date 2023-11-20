import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { headers } from 'next/headers';
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};
export async function POST(req: Request, res: Response) {
  if (req.method === 'POST') {
    try {
      const stripe = new Stripe(process.env.STRIPE_API_KEY, {
        apiVersion: '2023-08-16',
        typescript: true,
      });

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: [
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: 'price_1NsUl0F8nm8tvbVt8Ay5EUQR',
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000',
        cancel_url: `http://localhost:3000`,
      });
      return NextResponse.json(
        { url: session.url },
        {
          headers: corsHeaders,
        },
      );
    } catch (err: any) {
      console.log('❄️ ~ file: route.ts:30 ~ err:', err);
      return new NextResponse(err.message, { status: 400 });
    }
  } else {
    return NextResponse.json('Method Not Allowed', {
      status: 405,
      headers: [['Allow', 'POST']],
    });
  }
  /*   try {
    const stripe = new Stripe(process.env.STRIPE_API_KEY, {
      apiVersion: '2023-08-16',
      typescript: true,
    });
    const signature = headers().get('Stripe-Signature') as string;

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(
        'Hello',
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!,
      );
    } catch (error: any) {
      return new NextResponse(`Webhook Error: ${error.message}`, {
        status: 400,
      });
    }
    console.log(event);
    return NextResponse.json(event);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Error', { status: 500 });
  } */
}
