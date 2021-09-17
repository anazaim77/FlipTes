import {StyleSheet} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';

const styles = StyleSheet.create({
  wrapper: {
    padding: 13,
    paddingVertical: 21,
    backgroundColor: 'white',
  },
  text: {
    ...fonts.bold_14,
    color: colour.BLACK,
  },
  boxContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textFilter: {
    ...fonts.reg_14,
    color: colour.PRIMARY,
    // textTransform: 'uppercase',
  },
  boxLabelVal: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    // justifyContent: 'space-between',
  },
  oddBox: {
    width: '60%',
  },
  evenBox: {
    //   width:'55%',
  },
});

export default styles;
