import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import {Text, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colour} from '../../../../assets/styles';
import {DetailTxnContext} from '../../../../containers/pages/txn/DetailTxnPage';
import TextBold from '../../../atoms/text/TextBold';
import styles from './styles';

const NoTxn = () => {
  const {data, onToggleSnackBar} = React.useContext(DetailTxnContext);
  const copyTxnId = React.useCallback(() => {
    Clipboard.setString(data?.id);
    onToggleSnackBar();
  }, [data, onToggleSnackBar]);
  return (
    <View style={styles.wrapper}>
      <TextBold>{`ID TRANSAKSI: #${data?.id}`}</TextBold>
      <IconButton
        onPress={copyTxnId}
        icon={() => (
          <Icon name={'content-copy'} size={20} color={colour.PRIMARY} />
        )}
      />
    </View>
  );
};

export default NoTxn;
