import React from 'react';
import {View, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import styles from './styles';

const ButtonRipple = ({children}) => {
  return (
    <TouchableRipple
      style={{borderRadius: 2}}
      onPress={() => console.log('Pressed')}
      rippleColor="rgba(0, 0, 0, .32)">
      <View style={styles.boxFilter}>{children}</View>
    </TouchableRipple>
  );
};

export default ButtonRipple;
