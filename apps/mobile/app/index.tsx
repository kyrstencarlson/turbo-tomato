import { HeaderBackButton } from '@react-navigation/elements';
import { router, useNavigation } from 'expo-router';
import React from 'react';
import { Image, ImageBackground, StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';

const logo = require('@/assets/images/icon.png');

export default function WelcomeScreen() {
  const theme = useTheme();

  return (
    <View style={[styles.container]}>
      <View style={styles.logoSection}>
        <Image
          source={logo}
          style={{
            height: 200,
            objectFit: 'contain',
          }}
        />
      </View>

      <View style={styles.buttonSection}>
        <Button mode="contained" onPress={() => router.push('(auth)/login')} style={styles.button}>
          Sign In
        </Button>

        <Button mode="outlined" onPress={() => router.push('(auth)/register')} style={[styles.button, { borderColor: theme.colors.primary }]}>
          Sign Up
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 40,
  },
  logoSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: '100%',
  },
  companyName: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 16,
  },
  buttonSection: {
    width: '100%',
    gap: 16,
  },
  button: {
    width: '100%',
  },
});
