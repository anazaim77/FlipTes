import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import TextFromTo from '../../../atoms/text/TextFromTo';
import {textMoney, textTanggal} from '../../../../helper/textHelper';
import {getStatus} from '../../../../helper/statusHelper';
import Chips from '../../../atoms/text/Chips/Chips';

const CardTxn = ({onPress, data, index}) => {
  const _handlePress = useCallback(() => {
    if (typeof onPress == 'function') onPress(data.id);
  }, [onPress, data]);
  console.log(`data`, data);
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
            <Text style={styles.textContent}>{data?.beneficiary_name}</Text>
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.textContent}>{textMoney(data?.amount)}</Text>
            <Octicons
              style={{marginHorizontal: 5}}
              name={'primitive-dot'}
              size={10}
            />
            <Text style={styles.textContent}>
              {textTanggal(data?.created_at)}
            </Text>
          </View>
        </View>
        <Chips status={data?.status} />
      </View>
    </Card>
  );
};

export default CardTxn;
