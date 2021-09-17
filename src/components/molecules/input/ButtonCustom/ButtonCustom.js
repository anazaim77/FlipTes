import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {colour} from '../../../../assets/styles';
import {FontFamily} from '../../../../assets/styles/fonts';
import styles from './styles';

const themeInput = {
  colors: {
    primary: colour.PRIMARY,
    //   text: colour.TEXT.primary,
    text: '#FFFFFF',
    placeholder: colour.TEXT.grey,

    underline: 'transparent',
  },
  fonts: {
    regular: {
      ...FontFamily.reg,
    },
  },
};

const ButtonCustom = ({label, ...other}) => {
  return (
    <Button
      //   icon="camera"
      mode="contained"
      style={styles.wrapper}
      labelStyle={styles.text}
      theme={themeInput}
      //   onPress={() => console.log('Pressed')}
      {...other}>
      {label}
    </Button>
  );
};

export default ButtonCustom;
