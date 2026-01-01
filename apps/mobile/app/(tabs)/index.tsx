import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

import SignOutButton from '@/components/social-auth/sign-out-button';
import { useAuthContext } from '@/hooks/use-auth-context';

export default function HomeScreen() {
  const { profile, user } = useAuthContext();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={styles.titleContainer}>
        <Text variant="titleLarge">Welcome!</Text>
      </View>
      <View style={styles.stepContainer}>
        <Text variant="titleMedium">Email</Text>
        <Text>{user?.email}</Text>
      </View>
      <SignOutButton />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
