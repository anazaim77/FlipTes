import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import RadioCustom from '../../../molecules/input/RadioCustom';
import options from './SORT_OPTION';
import styles from './styles';

const ModalSort = ({onDissmiss, visible, active, onSelected, style}) => {
  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDissmiss}
        contentContainerStyle={[styles.modalCont, style]}>
        {options.map(({value, label}, id) => (
          <RadioCustom
            key={id}
            onSelected={onSelected}
            isActive={Boolean(value === active)}
            label={label}
            value={value}
            index={id}
          />
        ))}
      </Modal>
    </Portal>
  );
};

export default ModalSort;
