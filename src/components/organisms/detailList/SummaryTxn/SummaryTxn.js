import React, {useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {DetailTxnContext} from '../../../../containers/pages/txn/DetailTxnPage';
import ButtonRipple from '../../../atoms/button/ButtonRipple';
import TextFromTo from '../../../atoms/text/TextFromTo';
import TextLabelVal from '../../../atoms/text/TextLabelVal';
import styles from './styles';

const SummaryTxn = () => {
  const {data} = React.useContext(DetailTxnContext);

  const fieldData = useMemo(
    () => [
      {
        label: data?.beneficiary_name,
        value: data?.account_number,
      },
      {
        label: 'NOMINAL',
        value: data?.amount,
      },
      {
        label: 'BERITA TRANSFER',
        value: data?.remark,
      },
      {
        label: 'KODE UNIK',
        value: data?.unique_code,
      },
      {
        label: 'WAKTU DIBUAT',
        value: data?.created_at,
      },
    ],
    [data],
  );

  const [open, setOpen] = useState(true);
  const _handleOpen = () => setOpen(e => !e);

  // const Animation = useAnimation({doAnimation: !open, duration: 1000});
  // console.log(`data`, data);
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
        <View
          style={
            [
              // setAnimation({Animation, key: 'maxHeight', output: [400, 0]}),
            ]
          }>
          {/* <Animated.View */}
          <Divider />
          <View style={styles.wrapper}>
            <View style={styles.boxContent}>
              <TextFromTo
                sender={data?.sender_bank}
                benificiary={data?.beneficiary_bank}
              />
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
          {/* </Animated.View> */}
        </View>
      )}
    </React.Fragment>
  );
};

export default SummaryTxn;
