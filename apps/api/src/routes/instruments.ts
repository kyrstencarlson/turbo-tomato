import { FastifyInstance } from 'fastify';

export default async function instrumentsRoutes(app: FastifyInstance) {
  app.get('/instruments', async (req) => {
    const { data, error } = await app.supabase.from('instruments').select();

    if (error) {
      req.log.error({ error }, 'Supabase query failed');
      return { error: error.message };
    }

    return { data };
  });
}
