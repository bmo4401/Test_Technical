import { z } from 'zod';

export const envVariables = z.object({
  GRAPHQL_API_URL: z.string({ description: 'String please' }),
  GRAPHQL_API_KEY: z.string({ description: 'String please' }),
  NEXT_PUBLIC_SONG_API: z.string({ description: 'String please' }),
  STRIPE_API_KEY: z.string({ description: 'String please' }),
  STRIPE_WEBHOOK_SECRET: z.string({ description: 'String please' }),
  MUX_TOKEN_ID: z.string({ description: 'String please' }),
  MUX_TOKEN_SECRET: z.string({ description: 'String please' }),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
