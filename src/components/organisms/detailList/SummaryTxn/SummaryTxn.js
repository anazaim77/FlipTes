import React, {useMemo} from 'react';
import {View, Text} from 'react-native';
import {Divider} from 'react-native-paper';
import ButtonRipple from '../../../atoms/button/ButtonRipple';
import Chips from '../../../atoms/text/Chips';
import TextFromTo from '../../../atoms/text/TextFromTo';
import TextLabelVal from '../../../atoms/text/TextLabelVal';
import styles from './styles';

const SummaryTxn = () => {
  const fieldData = useMemo(
    () => [
      {
        label: 'SYIFA SALSABYLA',
        value: '073718723',
      },
      {
        label: 'NOMINAL',
        value: 'Rp10.000',
      },
      {
        label: 'BERITA TRANSFER',
        value: 'Coba m banking',
      },
      {
        label: 'KODE UNIK',
        value: '50',
      },
      {
        label: 'WAKTU DIBUAT',
        value: '8 April 2020',
      },
    ],
    [],
  );

  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <View style={styles.boxContent}>
          <Text style={styles.text}>{`DETAIL TRANSAKSI`}</Text>
          <ButtonRipple>
            <Text style={styles.textFilter}>Lihat</Text>
          </ButtonRipple>
        </View>
      </View>
      <Divider />
      <View style={styles.wrapper}>
        <View style={styles.boxContent}>
          <TextFromTo />
        </View>
        {/* </View>
      <View style={styles.wrapper}> */}
        <View style={styles.boxLabelVal}>
          {fieldData.map((el, id) => (
            <TextLabelVal
              key={id}
              style={[id % 2 ? styles.evenBox : styles.oddBox]}
              {...el}
            />
          ))}
          {/* <TextLabelVal style={styles.evenBox} />
          <TextLabelVal style={styles.oddBox} />
          <TextLabelVal style={styles.evenBox} />
          <TextLabelVal style={styles.oddBox} />
          <TextLabelVal style={styles.evenBox} /> */}
        </View>
      </View>
    </React.Fragment>
  );
};

export default SummaryTxn;
