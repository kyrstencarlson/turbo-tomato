import Fastify from 'fastify';
import healthRoutes from './routes/health';

const prefix = '/api';

export function buildApp() {
  const app = Fastify({ logger: true });

  app.register(healthRoutes, { prefix });

  return app;
}
