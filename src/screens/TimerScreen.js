import React, { useState, useEffect, useContext } from 'react';
import { View, Text, Animated, Pressable } from 'react-native';
import { Audio } from 'expo-av';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import colors from '../styles/colors';
import { SettingsContext } from '../SettingsContext';

function TimerScreen({ navigation }) {
  const [currentSet, setCurrentSet] = useState(1);
  const [isPhaseWork, setIsPhaseWork] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [settings] = useContext(SettingsContext);

  //BEGIN SOUND
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/phaseChange.mp3')
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
  // END SOUND

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}>
      {/* ugly hack */}
      <Pressable
        onPress={() => {
          setIsPlaying(!isPlaying);
        }}>
        {isPhaseWork && (
          <CountdownCircleTimer
            size={240}
            isPlaying={isPlaying}
            duration={settings.exerciseDuration}
            colors={[[colors.primary]]}
            onComplete={() => {
              if (currentSet <= settings.setsNumber) {
                setIsPhaseWork(!isPhaseWork);
                playSound('ariel');
                return [true];
              }
            }}>
            {({ remainingTime, animatedColor }) => (
              <>
                <Text style={{ fontWeight: 'bold', color: colors.font }}>
                  Work!
                </Text>
                <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
                  {remainingTime}
                </Animated.Text>
                <Text style={{ color: colors.font }}>
                  {currentSet} out of {settings.setsNumber} sets
                </Text>
              </>
            )}
          </CountdownCircleTimer>
        )}
        {!isPhaseWork && (
          <CountdownCircleTimer
            size={240}
            isPlaying={isPlaying}
            duration={settings.restDuration}
            colors={[[colors.secondary]]}
            onComplete={() => {
              if (currentSet < settings.setsNumber) {
                setIsPhaseWork(!isPhaseWork);
                setCurrentSet(currentSet + 1);
                playSound('pop');
                return [true];
              } else {
                navigation.navigate('Completed');
              }
            }}>
            {({ remainingTime, animatedColor }) => (
              <>
                <Text style={{ fontWeight: 'bold', color: colors.font }}>
                  Rest!
                </Text>
                <Animated.Text style={{ color: animatedColor, fontSize: 40 }}>
                  {remainingTime}
                </Animated.Text>
                <Text style={{ color: colors.font }}>
                  {currentSet} out of {settings.setsNumber} sets
                </Text>
              </>
            )}
          </CountdownCircleTimer>
        )}
      </Pressable>
    </View>
  );
}

export default TimerScreen;
