import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import {Modal, Portal, Searchbar, TouchableRipple} from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {colour, fonts} from '../../../../assets/styles';
import ButtonRipple from '../../../atoms/button/ButtonRipple';
import ModalSort from '../ModalSort';
import options from '../ModalSort/SORT_OPTION';
import styles from './styles';

const HeaderSearchFilter = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  const [visible, setVisible] = useState(false);
  const _handleVisible = () => setVisible(e => !e);
  const [active, setActive] = useState(options[0]);
  const _handleChange = id => {
    setActive(options[id]);
    _handleVisible();
  };
  return (
    <View style={styles.wrapper}>
      <Icon name={'search'} color={'#b1b1b1'} size={33} />
      <TextInput
        value={searchQuery}
        placeholder={'Cari nama, bank, atau nominal'}
        style={styles.input}
        onChangeText={onChangeSearch}
      />
      <ButtonRipple onPress={_handleVisible}>
        <Text style={styles.textFilter}>{active?.label}</Text>
        <Icon2 name={'chevron-down-outline'} color={colour.PRIMARY} size={20} />
      </ButtonRipple>
      <ModalSort
        active={active.value}
        onSelected={_handleChange}
        visible={visible}
        onDissmiss={_handleVisible}
      />
    </View>
  );
};

export default HeaderSearchFilter;
