import React, {useCallback} from 'react';
import {View} from 'react-native';
import {Card} from 'react-native-paper';
import Octicons from 'react-native-vector-icons/Octicons';
import {getStatus} from '../../../../helper/statusHelper';
import {textMoney, textTanggal} from '../../../../helper/textHelper';
import Chips from '../../../atoms/text/Chips/Chips';
import TextFromTo from '../../../atoms/text/TextFromTo';
import TextReg from '../../../atoms/text/TextReg';
import styles from './styles';

const CardTxn = ({onPress, data, index}) => {
  const _handlePress = useCallback(() => {
    if (typeof onPress == 'function') onPress(data.id);
  }, [onPress, data]);
  return (
    <Card
      style={[styles.wrapper, {borderColor: getStatus(data?.status).color}]}
      onPress={_handlePress}>
      <View style={styles.boxWrap}>
        <View>
          <TextFromTo
            sender={data?.sender_bank}
            benificiary={data?.beneficiary_bank}
          />
          <View style={styles.boxContent}>
            <TextReg>{data?.beneficiary_name}</TextReg>
          </View>
          <View style={styles.boxContent}>
            <TextReg>{textMoney(data?.amount)}</TextReg>
            <Octicons
              style={{marginHorizontal: 5}}
              name={'primitive-dot'}
              size={10}
            />
            <TextReg>{textTanggal(data?.created_at)}</TextReg>
          </View>
        </View>
        <Chips status={data?.status} />
      </View>
    </Card>
  );
};

export default CardTxn;
