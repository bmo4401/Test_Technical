import { z } from 'zod';

export const envVariables = z.object({
  NEXT_PUBLIC_API_URL: z.string({ description: 'String please' }),
  NEXT_PUBLIC_SONG_API: z.string({ description: 'String please' }),
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
