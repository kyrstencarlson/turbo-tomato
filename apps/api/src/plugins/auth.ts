import fp from 'fastify-plugin';

declare module 'fastify' {
  interface FastifyRequest {
    user?: {
      id: string;
      email?: string;
    };
  }
}

export default fp(async (app) => {
  app.decorateRequest('user', undefined);

  app.addHook('preHandler', async (req, reply) => {
    // Only enforce auth for routes that opt-in (see below)
    const needsAuth = (req.routeOptions.config as any)?.auth === true;
    if (!needsAuth) return;

    const header = req.headers.authorization;
    const token = header?.startsWith('Bearer ') ? header.slice(7) : null;

    if (!token) {
      return reply.code(401).send({ error: 'Missing bearer token' });
    }

    const { data, error } = await app.supabase.auth.getUser(token);

    if (error || !data.user) {
      return reply.code(401).send({ error: 'Invalid token' });
    }

    req.user = { id: data.user.id, email: data.user.email ?? undefined };
  });
});
