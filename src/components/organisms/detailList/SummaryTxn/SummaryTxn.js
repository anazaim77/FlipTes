import React, {useMemo, useState} from 'react';
import {View, Text, Animated} from 'react-native';
import {Divider} from 'react-native-paper';
import useAnimation, {setAnimation} from '../../../../helper/useAnimation';
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

  const [open, setOpen] = useState(false);
  const _handleOpen = () => setOpen(e => !e);

  const Animation = useAnimation({doAnimation: !open, duration: 1000});

  return (
    <React.Fragment>
      <View style={styles.wrapper}>
        <View style={styles.boxContent}>
          <Text style={styles.text}>{`DETAIL TRANSAKSI`}</Text>
          <ButtonRipple onPress={_handleOpen}>
            <Text style={styles.textFilter}>{open ? 'Tutup' : 'Lihat'}</Text>
          </ButtonRipple>
        </View>
      </View>
      {open && (
        <Animated.View
          style={[
            setAnimation({Animation, key: 'maxHeight', output: [400, 0]}),
          ]}>
          <Divider />
          <View style={styles.wrapper}>
            <View style={styles.boxContent}>
              <TextFromTo />
            </View>
            <View style={styles.boxLabelVal}>
              {fieldData.map((el, id) => (
                <TextLabelVal
                  key={id}
                  style={[id % 2 ? styles.evenBox : styles.oddBox]}
                  {...el}
                />
              ))}
            </View>
          </View>
        </Animated.View>
      )}
    </React.Fragment>
  );
};

export default SummaryTxn;
