import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { supabase } from '@/utils/supabase';
import { Button, Icon, IconButton, Text, TextInput } from 'react-native-paper';
import { useAppTheme } from '@/constants/theme';
import { router } from 'expo-router';

export default function RegisterScreen() {
  const theme = useAppTheme();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const emailValid = React.useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }, [email]);

  async function signInWithEmail() {
    setLoading(true);
    const { error, data } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    console.log(data);

    if (error) Alert.alert(error.message);
    setLoading(false);
  }

  async function signUpWithEmail() {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) Alert.alert(error.message);
    if (!session) Alert.alert('Please check your inbox for email verification!');
    setLoading(false);
  }

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1, justifyContent: 'space-between' }}>
      <View style={styles.container}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={{ ...styles.input, marginBottom: 8 }}
          keyboardType="email-address"
          autoCapitalize="none"
          disabled={loading}
        />

        <Button mode="text" onPress={() => signUpWithEmail()} style={styles.forgotPasswordButton} disabled={loading || !emailValid}>
          Forgot Password?
        </Button>

        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          mode="outlined"
          style={styles.input}
          secureTextEntry={!showPassword}
          returnKeyType="done"
          disabled={loading}
          onSubmitEditing={signInWithEmail}
          right={<TextInput.Icon icon={showPassword ? 'eye-slash' : 'eye'} onPress={() => setShowPassword(!showPassword)} disabled={loading} />}
        />

        <Button
          mode="contained"
          onPress={signInWithEmail}
          loading={loading}
          style={styles.loginButton}
          disabled={loading || !emailValid || !password.trim()}>
          Sign In
        </Button>

        <Button
          mode="outlined"
          onPress={signUpWithEmail}
          style={[styles.codeLoginButton, { borderColor: theme.colors.primary }]}
          disabled={loading || !emailValid}>
          Login with Code
        </Button>
      </View>
      <Text
        style={{
          alignSelf: 'center',
          fontWeight: '600',
          color: theme.colors.primary,
          marginBottom: 25,
        }}
        onPress={signUpWithEmail}>
        Sign Up
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 150,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginLeft: -8,
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 16,
    width: '100%',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 4,
  },
  loginButton: {
    marginTop: 8,
    width: '100%',
  },
  codeLoginButton: {
    marginTop: 8,
    width: '100%',
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  loadingText: {
    marginLeft: 8,
  },
});
