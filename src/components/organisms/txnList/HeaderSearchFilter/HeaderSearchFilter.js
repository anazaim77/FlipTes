import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {Searchbar, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {colour, fonts} from '../../../../assets/styles';
import ButtonRipple from '../../../atoms/button/ButtonRipple';
import styles from './styles';

const HeaderSearchFilter = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);
  return (
    <View style={styles.wrapper}>
      <Icon name={'search'} color={'#b1b1b1'} size={33} />
      <TextInput
        value={searchQuery}
        placeholder={'Cari nama, bank, atau nominal'}
        style={styles.input}
        onChangeText={onChangeSearch}
      />
      <ButtonRipple>
        <Text style={styles.textFilter}>urutkan</Text>
        <Icon2 name={'chevron-down-outline'} color={colour.PRIMARY} size={20} />
      </ButtonRipple>
    </View>
  );
};

export default HeaderSearchFilter;
