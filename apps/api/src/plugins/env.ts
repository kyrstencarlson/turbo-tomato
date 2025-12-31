import fp from 'fastify-plugin';
import envPlugin from '@fastify/env';

export default fp(async (app) => {
  await app.register(envPlugin, {
    dotenv: true,
    schema: {
      type: 'object',
      required: ['SUPABASE_URL', 'SUPABASE_PUBLISHABLE_KEY'],
      properties: {
        NODE_ENV: { type: 'string', default: 'development' },
        SUPABASE_URL: { type: 'string' },
        SUPABASE_PUBLISHABLE_KEY: { type: 'string' },
      },
    },
  });
});
