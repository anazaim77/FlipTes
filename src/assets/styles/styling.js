import {Dimensions} from 'react-native';

export default {
  widthWindow: Math.floor(Dimensions.get('window').width),
  heightWindow: Math.floor(Dimensions.get('window').height),
  widthScreen: Math.floor(Dimensions.get('screen').width),
  heightScreen: Math.floor(Dimensions.get('screen').height),
};
