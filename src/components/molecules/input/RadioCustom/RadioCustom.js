import React from 'react';
import {View, Text} from 'react-native';
import ButtonRipple from '../../../atoms/button/ButtonRipple';
import TextBold from '../../../atoms/text/TextBold';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {colour} from '../../../../assets/styles';

const RadioCustom = ({isActive, value, index, label, onSelected}) => {
  const _handleSelected = React.useCallback(() => {
    if (typeof onSelected === 'function') onSelected(index);
  }, [value, index, onSelected]);
  return (
    <ButtonRipple style={styles.wrapper} onPress={_handleSelected}>
      <Icon
        name={`radio-button-${isActive ? 'on' : 'off'}`}
        size={18}
        color={colour.PRIMARY}
      />
      <TextBold style={styles.label}>{label}</TextBold>
    </ButtonRipple>
  );
};

RadioCustom.defaultProps = {
  isActive: false,
};

export default RadioCustom;
