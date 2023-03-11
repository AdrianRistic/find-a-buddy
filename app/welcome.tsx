import { NavigationContainer, useNavigation } from 'expo-router';
import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
      <View>
        <Image
          source={require('find-a-buddy/images/welcome.jpg')}
          style={styles.image}
        ></Image>
        <View>
          <Text style={styles.textAlign}>
            The find-a-buddy Personality Test!
          </Text>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: '#a0a0a0',
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Text>⚫️</Text>
            <Text
              style={{
                marginLeft: 4,
                color: '722F37',
                fontSize: 15,
                fontWeight: '500',
              }}
            >
              Answer each question truthfully
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Text>⚫️</Text>
            <Text
              style={{
                marginLeft: 4,
                color: '722F37',
                fontSize: 15,
                fontWeight: '500',
              }}
            >
              There are 4 Personality types
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Text>⚫️</Text>
            <Text
              style={{
                marginLeft: 4,
                color: '722F37',
                fontSize: 15,
                fontWeight: '500',
              }}
            >
              This test will show you which one of these you are
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 5,
            }}
          >
            <Text>⚫️</Text>
            <Text
              style={{
                marginLeft: 4,
                color: '722F37',
                fontSize: 15,
                fontWeight: '500',
                marginRight: 3,
              }}
            >
              You will be paired with buddies that have complementary
              personality types
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => navigation.navigate('test')}
          style={{
            backgroundColor: 'orange',
            padding: 14,
            width: 120,
            borderRadius: 20,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 30,
          }}
        >
          <Text
            style={{
              color: 'black',
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Arial Rounded MT Bold',
            }}
          >
            Start Test
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  image: {
    height: 370,
    width: 390,
    resizeMode: 'contain',
  },
  textAlign: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
