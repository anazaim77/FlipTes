import {StyleSheet} from 'react-native';
import {colour, fonts, styling} from '../../../../assets/styles';

const styles = StyleSheet.create({
  wrapper: {
    minHeight: styling.heightScreen,
    paddingHorizontal: 34,
    paddingTop: 150,
  },
  textGreeting: {
    ...fonts.bold_24,
    color: colour.TEXT.primary,
  },
});
export default styles;
