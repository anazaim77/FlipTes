import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CardTxn from '../../../molecules/cards/CardTxn';

const ListTxn = ({goToDetail}) => {
  return (
    <FlatList
      data={[1, 2, 3]}
      renderItem={({item, index}) => (
        <CardTxn data={item} onPress={goToDetail} key={index} />
      )}
      // keyExtractor={item => item.id}
    />
  );
};

export default ListTxn;
