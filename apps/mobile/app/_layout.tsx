import 'react-native-reanimated';
//
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { CombinedDarkTheme, CombinedDefaultTheme } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PaperProvider } from 'react-native-paper';

export const unstable_settings = {
  anchor: '(tabs)',
};

export const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Retry failed requests once
    },
  },
});

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isThemeDark = colorScheme === 'dark';
  const theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider value={isThemeDark ? DarkTheme : DefaultTheme}>
        <QueryClientProvider client={QUERY_CLIENT}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
          <StatusBar style="auto" />
        </QueryClientProvider>
      </ThemeProvider>
    </PaperProvider>
  );
}
