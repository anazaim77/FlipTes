import {StyleSheet} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 8,
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
