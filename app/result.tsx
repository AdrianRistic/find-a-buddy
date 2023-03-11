import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const getPersonalityEmoji = (type) => {
  switch (type) {
    case 1:
      return '🤠';
    case 2:
      return '👷';
    case 3:
      return '🤔';
    case 4:
      return '🥰';
    default:
      return '';
  }
};
const descriptions = {
  1: 'You are an adventurer! You are always up for new experiences and enjoy living life to the fullest. You are spontaneous and enjoy taking risks, and you don’t like to be tied down by too many rules or responsibilities.',
  2: 'You are a builder! You have a strong work ethic and take pride in your accomplishments. You enjoy working with your hands and seeing the tangible results of your hard work. You value stability and security, and you are always looking for ways to improve your situation.',
  3: 'You are a philosopher! You enjoy contemplating the big questions in life and trying to understand the nature of reality. You have a deep sense of curiosity and love to learn new things. You are introspective and spend a lot of time thinking about your own thoughts and emotions.',
  4: 'You are an advocate! You have a strong sense of empathy and care deeply about the well-being of others. You are an excellent listener and are always there to provide support and encouragement to those who need it. You have a strong sense of justice and are passionate about making the world a better place.',
};

const ResultScreen = ({ route }) => {
  const { personalityType } = route.params;
  let personalityString = '';
  let personalityEmoji = '';

  switch (parseInt(personalityType)) {
    case 1:
      personalityString = 'Adventurer';
      personalityEmoji = getPersonalityEmoji(1);
      break;
    case 2:
      personalityString = 'Builder';
      personalityEmoji = getPersonalityEmoji(2);
      break;
    case 3:
      personalityString = 'Philosopher';
      personalityEmoji = getPersonalityEmoji(3);
      break;
    case 4:
      personalityString = 'Advocate';
      personalityEmoji = getPersonalityEmoji(4);
      break;
    default:
      personalityString = 'Unknown';
      personalityEmoji = '';
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#5826a8' }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text
          style={{
            fontSize: 50,
            marginTop: 50,
            fontFamily: 'Arial Rounded MT Bold',
            color: 'white',
          }}
        >
          {personalityString}
        </Text>
        <View
          style={{
            backgroundColor: 'orange',
            padding: 14,
            marginTop: 60,
            width: 150,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 100,

              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {personalityEmoji}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'orange',
            padding: 14,
            marginTop: 10,
            width: 340,
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 20,
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              fontSize: 18,
              fontFamily: 'Arial Rounded MT Bold',
              color: 'black',
            }}
          >
            {descriptions[personalityType]}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ResultScreen;
