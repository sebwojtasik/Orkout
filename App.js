import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { setGlobal } from 'reactn';
import colors from './src/styles/colors';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import TimerScreen from './src/screens/TimerScreen';
import WorkoutEndScreen from './src/screens/WorkoutEndScreen';
import { SettingsContextProvider } from './src/SettingsContext';

setGlobal({
  exerciseDuration: 5,
  restDuration: 5,
  setsNumber: 8,
});

function LogoTitle() {
  return (
    <Image
      style={{ width: 81.5, height: 23 }}
      source={require('./assets/title.png')}
    />
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <SettingsContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerTitleAlign: 'center',
          }}>
          <Stack.Group>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                  backgroundColor: colors.background,
                },
                headerTitle: (props) => <LogoTitle {...props} />,
              }}
            />
            <Stack.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                },
              }}
            />
            <Stack.Screen
              name="Timer"
              component={TimerScreen}
              options={{
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                },
              }}
            />
            <Stack.Screen
              name="Completed"
              component={WorkoutEndScreen}
              options={{
                headerStyle: {
                  elevation: 0,
                  shadowOpacity: 0,
                },
              }}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SettingsContextProvider>
  );
}

export default App;
