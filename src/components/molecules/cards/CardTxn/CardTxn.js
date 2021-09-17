import React from 'react';
import {View, Text} from 'react-native';
import {Card} from 'react-native-paper';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';

const CardTxn = ({onPress}) => {
  return (
    <Card style={styles.wrapper} onPress={onPress}>
      <View>
        <View style={styles.boxContent}>
          <Text style={styles.textTitle}>Permata</Text>
          <Fontisto
            style={{marginHorizontal: 5}}
            name={'arrow-right'}
            size={14}
          />
          <Text style={styles.textTitle}>BNI</Text>
        </View>
        <View style={styles.boxContent}>
          <Text style={styles.textContent}>Syifa Salsabyla</Text>
        </View>
        <View style={styles.boxContent}>
          <Text style={styles.textContent}>Rp10.000</Text>
          <Octicons
            style={{marginHorizontal: 3}}
            name={'primitive-dot'}
            size={13}
          />
          <Text style={styles.textContent}>7 April 2020</Text>
        </View>
      </View>
    </Card>
  );
};

export default CardTxn;
