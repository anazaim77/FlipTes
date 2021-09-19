import React, {useMemo, useState} from 'react';
import {Text, View} from 'react-native';
import {Divider} from 'react-native-paper';
import {DetailTxnContext} from '../../../../containers/pages/txn/DetailTxnPage';
import {textMoney, textTanggal} from '../../../../helper/textHelper';
import ButtonRipple from '../../../atoms/button/ButtonRipple';
import TextBold from '../../../atoms/text/TextBold';
import TextFromTo from '../../../atoms/text/TextFromTo';
import TextLabelVal from '../../../atoms/text/TextLabelVal';
import TextReg from '../../../atoms/text/TextReg/TextReg';
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
        value: textMoney(data?.amount),
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
        // value: data?.created_at,
        value: textTanggal(data?.created_at),
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
          <TextBold>{`DETAIL TRANSAKSI`}</TextBold>
          <ButtonRipple onPress={_handleOpen}>
            <TextReg style={styles.textFilter}>
              {open ? 'Tutup' : 'Lihat'}
            </TextReg>
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
            <View style={[styles.boxContent, {marginBottom: 3}]}>
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
