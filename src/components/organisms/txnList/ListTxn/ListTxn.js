import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CardTxn from '../../../molecules/cards/CardTxn';

const ListTxn = ({goToDetail, allData, queriedData}) => {
  return (
    <FlatList
      data={allData}
      contentContainerStyle={{paddingBottom: 200}}
      renderItem={({item, index}) => (
        <CardTxn data={item} onPress={goToDetail} key={index} />
      )}
    />
  );
};

export default ListTxn;
