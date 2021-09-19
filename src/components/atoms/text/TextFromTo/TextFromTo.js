import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import TextBold from '../TextBold';
import {textBank} from '../../../../helper/textHelper';

const TextFromTo = ({sender, benificiary}) => {
  return (
    <View style={styles.boxContent}>
      <TextBold>{textBank(sender)}</TextBold>
      <Fontisto style={{marginHorizontal: 5}} name={'arrow-right'} size={14} />
      <TextBold>{textBank(benificiary)}</TextBold>
    </View>
  );
};

export default TextFromTo;
