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
});

export default styles;
