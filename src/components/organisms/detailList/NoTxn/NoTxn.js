import React from 'react';
import {View, Text} from 'react-native';
import {DetailTxnContext} from '../../../../containers/pages/txn/DetailTxnPage';
import styles from './styles';

const NoTxn = () => {
  const {data} = React.useContext(DetailTxnContext);
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{`ID TRANSAKSI: #${data?.id}`}</Text>
    </View>
  );
};

export default NoTxn;
