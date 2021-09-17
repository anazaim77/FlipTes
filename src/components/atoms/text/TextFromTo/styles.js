import {StyleSheet} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';

const styles = StyleSheet.create({
  boxContent: {
    flexDirection: 'row',
    // padding: 3,
    paddingVertical: 0,
    margin: 0,
    alignItems: 'center',
  },
  textTitle: {
    ...fonts.bold_14,
    color: colour.BLACK,
  },
});

export default styles;
