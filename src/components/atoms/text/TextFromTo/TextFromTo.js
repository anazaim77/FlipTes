import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import TextBold from '../TextBold';

const TextFromTo = ({sender, benificiary}) => {
  return (
    <View style={styles.boxContent}>
      <TextBold style={styles.textTitle}>{sender}</TextBold>
      <Fontisto style={{marginHorizontal: 5}} name={'arrow-right'} size={14} />
      <TextBold style={styles.textTitle}>{benificiary}</TextBold>
    </View>
  );
};

export default TextFromTo;
