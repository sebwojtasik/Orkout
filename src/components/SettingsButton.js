import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import colors from '../styles/colors';

function SettingsButton(props) {
  return (
    <Pressable style={styles.buttonSettings} onPress={props.callback}>
      <Text style={styles.buttonSettingsText}>{props.text}</Text>
    </Pressable>
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
  buttonSettings: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.background,
    shadowColor: colors.background,
  },
  buttonSettingsText: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.primary,
    // userSelect: "none",
  },
});

export default SettingsButton;
