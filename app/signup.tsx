import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function signup() {
  return (
    <View>
      <SafeAreaView>
        <Text>Iam newlink</Text>
        <Link href="/dsf">back</Link>
      </SafeAreaView>
    </View>
  );
}
