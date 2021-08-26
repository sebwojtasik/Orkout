import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { useGlobal } from 'reactn';
import Button from '../components/Button';
import colors from '../styles/colors';
import { SettingsContext } from '../SettingsContext';

function HomeScreen({ navigation }) {
  const [exerciseDuration] = useGlobal('exerciseDuration');
  const [restDuration] = useGlobal('restDuration');
  const [setsNumber] = useGlobal('setsNumber');
  const [settings] = useContext(SettingsContext);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.background,
      }}>
      <Text style={{ fontSize: 32, fontWeight: 'bold', color: colors.font }}>
        Exercise
      </Text>
      <Text style={{ fontSize: 92, fontWeight: 'bold', color: colors.font }}>
        {settings.exerciseDuration} sec
      </Text>
      <Text style={{ fontSize: 24, color: colors.font }}>
        {settings.restDuration} seconds rest, {settings.setsNumber} sets
      </Text>
      <Button
        text="Settings"
        callback={() => navigation.navigate('Settings')}
        isOutlined
      />
      <Button text="Start" callback={() => navigation.navigate('Timer')} />
    </View>
  );
}

export default HomeScreen;
