import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';

const TextBold = ({children, size, style}) => {
  return (
    <Text style={[styles.textDft, {fontSize: size}, style]}>{children}</Text>
  );
};

export default TextBold;

const styles = StyleSheet.create({
  textDft: {
    ...fonts.bold_14,
    color: colour.BLACK,
  },
});
