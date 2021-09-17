import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {TextInput} from 'react-native-paper';
import {colour} from '../../../../assets/styles';
import {FontFamily} from '../../../../assets/styles/fonts';
import styles from './styles';

const themeInput = {
  colors: {
    primary: colour.PRIMARY,
    text: colour.TEXT.primary,
    placeholder: colour.TEXT.grey,

    underline: 'transparent',
  },
  fonts: {
    regular: {
      ...FontFamily.reg,
    },
  },
};

const CustomTextInput = ({label}) => {
  const [text, setText] = useState('');
  return (
    <TextInput
      label={label}
      value={text}
      mode={'outlined'}
      style={styles.wrapper}
      theme={themeInput}
      onChangeText={text => setText(text)}
    />
  );
};

export default CustomTextInput;
