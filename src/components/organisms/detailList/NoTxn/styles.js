import {StyleSheet} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';

const styles = StyleSheet.create({
  wrapper: {
    padding: 13,
    paddingVertical: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...fonts.bold_14,
    color: colour.BLACK,
    // marginRight: 5,
  },
});

export default styles;
