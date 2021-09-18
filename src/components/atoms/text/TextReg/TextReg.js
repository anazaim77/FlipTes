import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';

const TextReg = ({children, size, style}) => {
  return (
    <Text style={[styles.textDft, {fontSize: size}, style]}>{children}</Text>
  );
};

export default TextReg;

const styles = StyleSheet.create({
  textDft: {
    ...fonts.reg_14,
    color: colour.BLACK,
  },
});
