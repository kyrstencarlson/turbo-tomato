import Fastify from 'fastify';
import healthRoutes from './routes/health';
import auth from './plugins/auth';
import env from './plugins/env';
import supabase from './plugins/supabase';
import instrumentsRoutes from './routes/instruments';

const prefix = '/api';

export function buildApp() {
  const app = Fastify({ logger: false });

  app.register(env);
  app.register(supabase);
  app.register(auth);
  app.register(healthRoutes, { prefix });
  app.register(instrumentsRoutes, { prefix });

  return app;
}
