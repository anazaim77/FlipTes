import React from 'react';
import {View, Text} from 'react-native';
import TextBold from '../TextBold';
import TextReg from '../TextReg';
import styles from './styles';

const TextLabelVal = ({style, label, value}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <TextBold>{label}</TextBold>
      <TextReg>{value}</TextReg>
    </View>
  );
};

export default TextLabelVal;
