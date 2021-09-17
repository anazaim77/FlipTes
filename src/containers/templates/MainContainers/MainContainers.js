import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';

const MainContainers = ({children, style}) => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={[styles.wrapper, style]}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainContainers;
