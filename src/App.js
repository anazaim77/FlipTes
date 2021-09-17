import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import AppNavigator from './configs/routes/AppNavigator';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './configs/redux';
import setupAxios from './configs/apis/setupAxios';
import axios from 'axios';
import {colour} from './assets/styles';
import {FontFamily} from './assets/styles/fonts';

setupAxios(axios, store);

const theme = {
  ...DefaultTheme,
  dark: false,
  myOwnProperty: true,
  textProps: {
    allowFontScaling: false,
    letterSpacing: 0,
  },
  // colour: colour,
  // fonts: fonts,
  // styling: styling,
  fonts: {
    regular: {...FontFamily.reg},
  },
  colors: {
    ...DefaultTheme.colors,
    primary: colour.PRIMARY,
    // accent: Coloring.BLACK['50'],
    background: 'transparent',
    text: colour.TEXT.primary,
    placeholder: colour.TEXT.grey,
    surface: '#ffffff',

    // accent: '#03dac4',
    // backdrop: 'rgba(0, 0, 0, 0.5)',
    // background: '#f6f6f6',
    // disabled: 'rgba(0, 0, 0, 0.26)',
    // error: '#B00020',
    // notification: '#f50057',
    // onBackground: '#000000',
    // onSurface: '#000000',
    // placeholder: 'rgba(0, 0, 0, 0.54)',
    // primary: '#6200ee',
    // surface: '#ffffff',
    // text: Coloring.BLACK['50'],
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider theme={theme}>
          <AppNavigator />
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
}
