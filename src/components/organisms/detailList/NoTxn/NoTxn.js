import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const NoTxn = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{`ID TRANSAKSI: #FT16523123`}</Text>
    </View>
  );
};

export default NoTxn;
