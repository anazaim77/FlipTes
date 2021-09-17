import React from 'react';
import {View, Text, FlatList} from 'react-native';
import CardTxn from '../../../molecules/cards/CardTxn';

const ListTxn = ({goToDetail}) => {
  return (
    <FlatList
      data={[1, 2, 3]}
      renderItem={({item, index}) => (
        <CardTxn key={index} data={item} onPress={goToDetail} />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default ListTxn;
