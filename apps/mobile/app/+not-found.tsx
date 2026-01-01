import { StyleSheet, View } from 'react-native';
import { Link, Stack } from 'expo-router';
import { Text, Button } from 'react-native-paper';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops! Not Found' }} />
      <View style={styles.container}>
        <Text variant="displayMedium" style={styles.title}>
          404
        </Text>
        <Text variant="titleLarge" style={styles.subtitle}>
          This screen doesn't exist.
        </Text>
        <Link href="/" asChild>
          <Button mode="contained" style={styles.button}>
            Go to home screen
          </Button>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    gap: 16,
  },
  title: {
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'center',
  },
  button: {
    marginTop: 8,
  },
});
