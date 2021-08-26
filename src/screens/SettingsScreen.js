import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SettingsButton from '../components/SettingsButton';
import colors from '../styles/colors';
import { SettingsContext } from '../SettingsContext';

function SettingsScreen() {
  const [settings, setSettings] = useContext(SettingsContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}>
      <Text style={styles.title}>Exercise</Text>
      <View style={styles.settingsView}>
        <SettingsButton
          text="-"
          callback={() =>
            settings.exerciseDuration > 5 &&
            setSettings({
              ...settings,
              exerciseDuration: settings.exerciseDuration - 5,
            })
          }
        />
        <Text style={{ fontSize: 24, color: colors.font }}>
          {' '}
          {settings.exerciseDuration} sec{' '}
        </Text>
        <SettingsButton
          text="+"
          callback={() =>
            setSettings({
              ...settings,
              exerciseDuration: settings.exerciseDuration + 5,
            })
          }
        />
      </View>

      <Text style={styles.title}>Rest</Text>
      <View style={styles.settingsView}>
        <SettingsButton
          text="-"
          callback={() =>
            settings.restDuration > 5 &&
            setSettings({
              ...settings,
              restDuration: settings.restDuration - 5,
            })
          }
        />
        <Text style={{ fontSize: 24, color: colors.font }}>
          {' '}
          {settings.restDuration} sec{' '}
        </Text>
        <SettingsButton
          text="+"
          callback={() =>
            setSettings({
              ...settings,
              restDuration: settings.restDuration + 5,
            })
          }
        />
      </View>

      <Text style={styles.title}>Duration</Text>
      <View style={styles.settingsView}>
        <SettingsButton
          text="-"
          callback={() =>
            settings.setsNumber > 1 &&
            setSettings({
              ...settings,
              setsNumber: settings.setsNumber - 1,
            })
          }
        />
        <Text style={{ fontSize: 24, color: colors.font }}>
          {' '}
          {settings.setsNumber} sets{' '}
        </Text>
        <SettingsButton
          text="+"
          callback={() =>
            setSettings({
              ...settings,
              setsNumber: settings.setsNumber + 1,
            })
          }
        />
      </View>
      <Text style={{ color: 'darkgray' }}>
        Workout time:{' '}
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
    </View>
  );
}

const styles = StyleSheet.create({
  settingsView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    marginTop: 25,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    color: colors.font,
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
