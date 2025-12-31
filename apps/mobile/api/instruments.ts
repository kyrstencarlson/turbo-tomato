import { useQuery } from '@tanstack/react-query';
import { createApiClient } from './client';

interface Instrument {
  id: string;
  name: string;
}

const client = createApiClient();

export const getInstruments = async () => {
  const response = await client.get<{ data: Instrument[] }>('/instruments');

  if (response.status !== 200) {
    throw new Error('Failed to fetch instruments');
  }

  return response.data.data;
};
