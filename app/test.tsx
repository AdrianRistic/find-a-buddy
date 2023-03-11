import { NavigationContainer, useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Button, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const questions = [
  {
    question: 'Your friends are doing a party. You most likely...',
    answers: [
      {
        answer: 'show up spontaneously and surprise everyone',
        personalityType: 1,
      },
      {
        answer: 'are involved in the planning and organisation',
        personalityType: 2,
      },
      {
        answer:
          'observe what is happening because that is more exciting than participation',
        personalityType: 3,
      },
      {
        answer:
          'are responsible for food, drinks, snacks and that everyone has a great time!',
        personalityType: 4,
      },
    ],
  },
  {
    question: 'Your main motivation for talking to others is mostly...',
    answers: [
      { answer: 'curiosity', personalityType: 1 },
      { answer: 'to get things done', personalityType: 2 },
      {
        answer: 'to ponder on the deep questions of life.',
        personalityType: 3,
      },
      { answer: 'to help others/ to interact socially', personalityType: 4 },
    ],
  },
  {
    question: 'When you play games with others, you do it because...',
    answers: [
      { answer: 'of the great experience!', personalityType: 1 },
      { answer: 'you want to win!', personalityType: 2 },
      {
        answer: 'there is lots to be learned about the nature of humanity!',
        personalityType: 3,
      },
      {
        answer: 'it is a great way to spend time with one another!',
        personalityType: 4,
      },
    ],
  },
  {
    question: 'The most horrible thing to me is...',
    answers: [
      { answer: 'boredom!', personalityType: 1 },
      { answer: 'not being in control!', personalityType: 2 },
      {
        answer: "well, that depends on what you mean by 'most horrible thing'",
        personalityType: 3,
      },
      { answer: 'social chaos!', personalityType: 4 },
    ],
  },
  {
    question: 'The most exciting thing to me is...',
    answers: [
      { answer: 'new experiences!', personalityType: 1 },
      { answer: 'new projects!', personalityType: 2 },
      { answer: 'new thoughts & ideas!', personalityType: 3 },
      { answer: 'new acquaintances!', personalityType: 4 },
    ],
  },
];

const PersonalityTestScreen = ({ navigation }) => {
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (questionIndex, answerIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[questionIndex] =
      questions[questionIndex].answers[answerIndex].personalityType;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    const navigation = useNavigation();
    // count the number of occurrences of each personality type
    const counter = { 1: 0, 2: 0, 3: 0, 4: 0 };
    answers.forEach((answer) => {
      counter[answer] += 1;
    });

    // determine the personality type with the highest count
    let personalityType = 1;
    let highestCount = 0;
    Object.keys(counter).forEach((key) => {
      if (counter[key] > highestCount) {
        highestCount = counter[key];
        personalityType = key;
      }
    });

    // navigate to the result screen with the personality type as a parameter
    navigation.navigate('result', { personalityType: personalityType });
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#5826a8' }}>
      <SafeAreaView>
        <ScrollView>
          <View>
            {questions.map((question, questionIndex) => (
              <View key={questionIndex}>
                <Text
                  style={{
                    textAlign: 'center',
                    marginTop: 30,
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginLeft: 20,
                    marginRight: 20,
                    color: 'white',
                  }}
                >
                  {question.question}
                </Text>
                {question.answers.map((answer, answerIndex) => (
                  <Pressable
                    key={answerIndex}
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed ? '#b3a7e8' : '#5539cc',
                        padding: 2,
                        width: 300,
                        borderRadius: 20,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: 30,
                      },
                    ]}
                    onPress={() => handleAnswer(questionIndex, answerIndex)}
                  >
                    <Text
                      style={{
                        color: 'white',
                        textAlign: 'center',
                        fontSize: 18,
                        fontFamily: 'Arial Rounded MT Bold',
                      }}
                    >
                      {answer.answer}
                    </Text>
                  </Pressable>
                ))}
              </View>
            ))}
            <Pressable
              style={{
                backgroundColor: 'green',
                padding: 2,
                width: 100,
                borderRadius: 20,
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 30,
              }}
              onPress={handleSubmit}
            >
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontSize: 18,
                  fontFamily: 'Arial Rounded MT Bold',
                }}
              >
                Submit
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default PersonalityTestScreen;
