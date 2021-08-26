import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import colors from '../styles/colors';

function Button(props) {
  return (
    <Pressable
      style={props.isOutlined ? styles.buttonOutlined : styles.button}
      onPress={props.callback}>
      <Text
        style={
          props.isOutlined ? styles.buttonOutlinedText : styles.buttonText
        }>
        {props.children}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonOutlined: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    borderColor: colors.primary,
    backgroundColor: colors.background,
    borderWidth: 2,
    shadowColor: colors.background,
  },
  buttonOutlinedText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.primary,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: colors.primary,
    shadowColor: colors.background,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: colors.background,
  },
});

export default Button;
