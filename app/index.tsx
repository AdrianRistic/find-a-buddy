import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function index() {
  return (
    <View style={styles.container}>
      <Text>Open up to start working on your app!</Text>
      <StatusBar style="auto" />
      <Link href="/signup">I am the link</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
