import React from 'react';
import {View, Text} from 'react-native';
import {TouchableRipple} from 'react-native-paper';
import styles from './styles';

const ButtonRipple = ({children, onPress, style}) => {
  const _handlePress = () => {
    if (typeof onPress === 'function') onPress();
    console.log('Pressed');
  };
  return (
    <TouchableRipple
      style={{borderRadius: 2}}
      onPress={_handlePress}
      rippleColor="rgba(0, 0, 0, .10)">
      <View style={[styles.boxFilter, style]}>{children}</View>
    </TouchableRipple>
  );
};

export default ButtonRipple;
