import React from 'react';
import {View, Text} from 'react-native';
import {fonts} from '../../../../assets/styles';
import {getStatus} from '../../../../helper/statusHelper';
import TextBold from '../TextBold';
import styles from './styles';

const Chips = ({status}) => {
  if (status === 'PENDING')
    return (
      <View style={[styles.wrapper, styles.boxPending]}>
        <Text style={[styles.textFont]}>{getStatus(status).text}</Text>
      </View>
    );
  else if (status === 'SUCCESS')
    return (
      <View style={[styles.wrapper, styles.boxSuccess]}>
        <Text style={[styles.textFont, {color: 'white'}]}>
          {getStatus(status).text}
        </Text>
      </View>
    );
  return <View />;
};

export default Chips;
