import {StyleSheet} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';

const styles = StyleSheet.create({
  wrapper: {
    borderLeftWidth: 6,
    // borderLeftColor: colour.PRIMARY,
    borderColor: colour.PRIMARY,
    // borderWidth: 1,
    marginTop: 8,
    // marginHorizontal: 8,
    padding: 0,
    paddingVertical: 13,
    paddingHorizontal: 13,
  },
  boxWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boxContent: {
    flexDirection: 'row',
    // padding: 3,
    // paddingHorizontal: 13,
    paddingVertical: 0,
    margin: 0,
    alignItems: 'center',
  },
  textTitle: {
    ...fonts.bold_14,
    color: colour.BLACK,
  },
  textContent: {
    ...fonts.reg_14,
    color: colour.BLACK,
  },
});

export default styles;
