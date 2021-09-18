import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import TextFromTo from '../../../atoms/text/TextFromTo';

const CardTxn = ({onPress, data, index}) => {
  const _handlePress = useCallback(() => {
    if (typeof onPress == 'function') onPress(data.id);
  }, [onPress, data]);
  return (
    <Card style={styles.wrapper} onPress={_handlePress}>
      <View>
        <TextFromTo
          sender={data?.sender_bank}
          benificiary={data?.beneficiary_bank}
        />
        <View style={styles.boxContent}>
          <Text style={styles.textContent}>{data?.beneficiary_name}</Text>
        </View>
        <View style={styles.boxContent}>
          <Text style={styles.textContent}>{data?.amount}</Text>
          <Octicons
            style={{marginHorizontal: 3}}
            name={'primitive-dot'}
            size={13}
          />
          <Text style={styles.textContent}>{data?.created_at}</Text>
        </View>
      </View>
    </Card>
  );
};

export default CardTxn;
