import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

// Get Supabase config from app.config.js extra (which reads from .env)
const supabaseUrl = Constants.expoConfig?.extra?.supabaseUrl;
const supabasePublishableKey = Constants.expoConfig?.extra?.supabasePublishableKey;

if (!supabaseUrl || !supabasePublishableKey) {
  throw new Error(
    'Missing Supabase environment variables.'
  );
}

export const supabase = createClient(supabaseUrl, supabasePublishableKey, {
  auth: {
    storage: undefined, // Use default storage for React Native
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
