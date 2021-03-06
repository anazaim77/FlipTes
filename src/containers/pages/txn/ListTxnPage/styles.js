import {StyleSheet} from 'react-native';
import {colour, fonts, styling} from '../../../../assets/styles';

const styles = StyleSheet.create({
  wrapper: {
    // minHeight: styling.heightScreen,
    paddingHorizontal: 8,
    // backgroundColor: 'white',
    // paddingTop: 150,
  },
  textGreeting: {
    ...fonts.bold_24,
    color: colour.TEXT.primary,
  },
  boxNotFound: {
    ...styling.itemCentered,
    height: styling.heightScreen - 200,
  },
});
export default styles;
