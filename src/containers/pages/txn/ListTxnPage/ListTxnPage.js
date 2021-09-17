import React, {Component} from 'react';
import {View, Text} from 'react-native';
import HeaderSearchFilter from '../../../../components/organisms/txnList/HeaderSearchFilter';
import MainContainers from '../../../templates/MainContainers';

class ListTxnPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MainContainers>
        <HeaderSearchFilter />
        <Text> ListTxnPage </Text>
      </MainContainers>
    );
  }
}

export default ListTxnPage;
