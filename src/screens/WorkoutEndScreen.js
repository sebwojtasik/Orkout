import React, { useState, useEffect, useContext } from 'react';
import { View, Text } from 'react-native';
import { Audio } from 'expo-av';
import LottieView from 'lottie-react-native';
import colors from '../styles/colors';
import Button from '../components/Button';
import { SettingsContext } from '../SettingsContext';

function WorkoutEndScreen({ navigation }) {
  const [settings] = useContext(SettingsContext);

  //BEGIN SOUND
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/workoutCompleted.mp3')
    );
    setSound(sound);

    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    playSound();
  }, []);
  // END SOUND

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}>
      <Text
        style={{
          color: colors.font,
          fontWeight: 'bold',
          fontSize: 24,
          marginBottom: 20,
        }}>
        Workout completed!
      </Text>
      <LottieView
        style={{ height: 200 }}
        source={require('../../assets/workoutCompleted.json')}
        autoPlay
        loop={false}
      />
      <Text style={{ color: 'darkgray', marginBottom: 10 }}>
        You worked out for{' '}
        {Math.floor(
          (settings.setsNumber * settings.restDuration +
            settings.setsNumber * settings.exerciseDuration) /
            60
        )}{' '}
        mins{' '}
        {(settings.setsNumber * settings.restDuration +
          settings.setsNumber * settings.exerciseDuration) %
          60}{' '}
        seconds
      </Text>
      <Button
        text="Finish"
        isOutlined
        callback={() => navigation.navigate('Home')}
      />
    </View>
  );
}

export default WorkoutEndScreen;
