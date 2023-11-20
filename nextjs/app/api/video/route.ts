import { NextResponse } from 'next/server';
import Mux from '@mux/mux-node';
const { Video } = new Mux(
  process.env.MUX_TOKEN_ID!,
  process.env.MUX_TOKEN_SECRET!,
);
const videoUrl = 'https://www.youtube.com/watch?v=sNlpCyDX-Ik';
export async function POST(req: Request) {
  try {
    const asset = await Video.Assets.create({
      input: videoUrl,
      playback_policy: 'public',
      test: false,
    });
    console.log('❄️ ~ file: :15 ~ asset:', asset);
    return NextResponse.json(asset);
  } catch (error) {
    console.log(error);
    return new NextResponse('Internal Error', { status: 500 });
  }
}
