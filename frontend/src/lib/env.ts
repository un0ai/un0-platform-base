import { z } from 'zod';

const envSchema = z.object({
  APP_URL: z.string().url().default('http://localhost:3000'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  API_BASE_URL: z.string().url().default('http://localhost:8000'),
  // Add more environment variables as needed
});

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envSchema> {}
  }
}

try {
  envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    const { fieldErrors } = error.flatten();
    const errorMessage = Object.entries(fieldErrors)
      .map(([field, errors]) => `${field}: ${errors?.join(', ')}`)
      .join('\n');
    
    throw new Error(`Invalid environment variables:\n${errorMessage}`);
  }
}

export const env = process.env as z.infer<typeof envSchema>;
