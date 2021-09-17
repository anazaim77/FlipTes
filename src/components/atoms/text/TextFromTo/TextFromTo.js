import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const TextFromTo = () => {
  return (
    <View style={styles.boxContent}>
      <Text style={styles.textTitle}>Permata</Text>
      <Fontisto style={{marginHorizontal: 5}} name={'arrow-right'} size={14} />
      <Text style={styles.textTitle}>BNI</Text>
    </View>
  );
};

export default TextFromTo;
