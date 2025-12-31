import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Platform } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, useTheme } from 'react-native-paper';

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
});

export type AppTheme = typeof CombinedDefaultTheme;

export const CombinedDefaultTheme = {
  ...DefaultTheme,
  ...MD3LightTheme,
  colors: {
    ...DefaultTheme.colors,
    ...MD3LightTheme.colors,
    primary: '#9C27B0', // Purple
    secondary: '#E91E63', // Pink
    info: '#2196F3', // Blue
    warning: '#FF9800', // Orange
    error: '#F44336', // Red
    success: '#4CAF50', // Green
  },
  roundness: 5,
};

export const CombinedDarkTheme = {
  ...DarkTheme,
  ...MD3DarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...MD3DarkTheme.colors,
    primary: '#9C27B0', // Purple
    secondary: '#E91E63', // Pink
    info: '#2196F3', // Blue
    warning: '#FF9800', // Orange
    error: '#F44336', // Red
    success: '#4CAF50', // Green
  },
  roundness: 5,
};

export const useAppTheme = () => useTheme<AppTheme>();
