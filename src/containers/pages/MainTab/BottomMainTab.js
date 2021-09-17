import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as PageTabs from '../MainTab';
import {Text} from 'react-native';

const Tab = createBottomTabNavigator();

function BottomMainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIcon: () => {
          return <Text>ada</Text>;
        },
      }}>
      <Tab.Screen name="home" component={PageTabs.DashboardPage} />
      <Tab.Screen name="profile" component={PageTabs.ProfilePage} />
    </Tab.Navigator>
  );
}

export default BottomMainTab;
