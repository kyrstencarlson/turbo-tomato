import { Session, User } from '@supabase/supabase-js';
import { createContext, useContext } from 'react';

export type AuthData = {
  session?: Session | null;
  user?: User | null;
  profile?: any | null;
  isLoading: boolean;
  isLoggedIn: boolean;
};

export const AuthContext = createContext<AuthData>({
  session: undefined,
  user: undefined,
  profile: undefined,
  isLoading: true,
  isLoggedIn: false,
});

export const useAuthContext = () => useContext(AuthContext);
