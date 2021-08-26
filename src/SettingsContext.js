import React, { useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const STORAGE_KEY = 'orkoutSettings';

const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (e) {
    console.log('Error: Failed to save settings');
  }
};

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.log('Error: Failed to read settings');
  }
};

export const SettingsContext = createContext();

export const SettingsContextProvider = (props) => {
  const [settings, setSettings] = useState({});

  useEffect(() => {
    getData().then((data) => {
      if (data) {
        setSettings(data);
      } else {
        setSettings({ exerciseDuration: 60, restDuration: 30, setsNumber: 8 });
      }
    });
  }, []);

  useEffect(() => {
    storeData(settings);
  }, [settings]);

  return (
    <SettingsContext.Provider value={[settings, setSettings]}>
      {props.children}
    </SettingsContext.Provider>
  );
};
