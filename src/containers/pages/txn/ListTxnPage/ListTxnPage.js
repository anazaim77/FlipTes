import React, {Component} from 'react';
import {View, Text} from 'react-native';
import HeaderSearchFilter from '../../../../components/organisms/txnList/HeaderSearchFilter';
import ListTxn from '../../../../components/organisms/txnList/ListTxn';
import screens from '../../../../configs/routes/screens';
import MainContainers from '../../../templates/MainContainers';
import styles from './styles';

class ListTxnPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  _goToDetail = id => {
    this.props.navigation.navigate(screens.txn_detail);
  };

  render() {
    return (
      <MainContainers noScroll style={styles.wrapper}>
        <HeaderSearchFilter />
        <ListTxn goToDetail={this._goToDetail} />
        {/* <Text> ListTxnPage </Text> */}
      </MainContainers>
    );
  }
}

export default ListTxnPage;
