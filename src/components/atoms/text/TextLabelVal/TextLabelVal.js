import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const TextLabelVal = ({style, label, value}) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Text style={styles.textTitle}>{label}</Text>
      <Text style={styles.textContent}>{value}</Text>
    </View>
  );
};

export default TextLabelVal;
