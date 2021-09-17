import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import NoTxn from '../../../../components/organisms/detailList/NoTxn';
import SummaryTxn from '../../../../components/organisms/detailList/SummaryTxn';
import MainContainers from '../../../templates/MainContainers';

class DetailTxnPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <MainContainers>
        <NoTxn />
        <Divider />
        <SummaryTxn />
      </MainContainers>
    );
  }
}

export default DetailTxnPage;
