import React, { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { supabase } from '@/utils/supabase';
import { Button, Icon, TextInput } from 'react-native-paper';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

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
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <TextInput
          mode="outlined"
          label="Email"
          right={<Icon source="email" size={20} color="black" />}
          onChangeText={(text: string) => setEmail(text)}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
          textContentType="username"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <TextInput
          mode="outlined"
          label="Password"
          right={<Icon source="lock" size={20} color="black" />}
          onChangeText={(text: string) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          autoCapitalize="none"
          textContentType="password"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button mode="contained" disabled={loading} onPress={() => signInWithEmail()}>
          Sign in
        </Button>
      </View>
      <View style={styles.verticallySpaced}>
        <Button mode="outlined" disabled={loading} onPress={() => signUpWithEmail()}>
          Sign up
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
});
