import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomMainTab from '../../containers/pages/MainTab/BottomMainTab';
import screenProps from './screenProps';
import screens from './screens';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens.login}>
        <Stack.Screen name={screens.mainMenu} component={BottomMainTab} />
        {screenProps.map((el, id) => {
          return (
            <Stack.Screen
              key={id}
              // options={{header: () => null}}
              {...el}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
