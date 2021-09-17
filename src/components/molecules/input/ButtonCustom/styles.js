import {StyleSheet} from 'react-native';
import {fonts} from '../../../../assets/styles';
import {FontFamily} from '../../../../assets/styles/fonts';

const styles = StyleSheet.create({
  wrapper: {
    // height: 50,
    marginTop: 13,
    // borderRadius: 20,
    // backgroundColor: 'red',
  },
  text: {
    paddingVertical: 3,
    ...FontFamily.med,
    fontSize: 18,
    color: 'white',
  },
});
export default styles;
