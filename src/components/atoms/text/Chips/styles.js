import {StyleSheet} from 'react-native';
import {colour, fonts} from '../../../../assets/styles';

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  boxSuccess: {
    backgroundColor: colour.SECONDARY,
  },
  boxPending: {
    borderWidth: 2,
    borderColor: colour.PRIMARY,
  },
  textFont: {
    ...fonts.black_10,
    fontSize: 12,
  },
});

export default styles;
