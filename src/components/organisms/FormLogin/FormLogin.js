import React from 'react';
import {View, Text} from 'react-native';
import ButtonCustom from '../../molecules/input/ButtonCustom';
import CustomTextInput from '../../molecules/input/CustomTextInput';

const FormLogin = ({onSubmit}) => {
  return (
    <View>
      <CustomTextInput label={'Email'} />
      <CustomTextInput label={'Password'} />
      <ButtonCustom label={'Login'} onPress={onSubmit} />
    </View>
  );
};

export default FormLogin;
