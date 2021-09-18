import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import CardTxn from '../../../../components/molecules/cards/CardTxn';
import HeaderSearchFilter from '../../../../components/organisms/txnList/HeaderSearchFilter';
import ListTxn from '../../../../components/organisms/txnList/ListTxn';
import {fetch_list_sg} from '../../../../configs/redux/actions/txnActions';
import screens from '../../../../configs/routes/screens';
import {searchFind} from '../../../../helper/listHelper';
import MainContainers from '../../../templates/MainContainers';
import styles from './styles';

class ListTxnPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };
  }

  componentDidMount() {
    const {fetch_list_sg} = this.props;
    fetch_list_sg();
  }

  _goToDetail = id => {
    this.props.navigation.navigate(screens.txn_detail, {id});
  };

  handleChangeQuery = e => {
    this.setState({query: e});
  };

  render() {
    const {all, queried} = this.props;
    const {query} = this.state;
    console.log(`all`, all);
    return (
      <MainContainers noScroll style={styles.wrapper}>
        <HeaderSearchFilter
          query={query}
          onChangeQuery={this.handleChangeQuery}
        />
        <FlatList
          data={searchFind(all, query)}
          contentContainerStyle={{paddingBottom: 200}}
          renderItem={({item, index}) => (
            <CardTxn data={item} onPress={this._goToDetail} key={index} />
          )}
        />
        {/* <ListTxn
          allData={all}
          queriedData={queried}
          goToDetail={this._goToDetail}
        /> */}
      </MainContainers>
    );
  }
}

const mapState = ({txnReducer}) => ({
  all: txnReducer.list.all,
  queried: txnReducer.list.queried,
});

const mapDispatch = {
  fetch_list_sg,
};

export default connect(mapState, mapDispatch)(ListTxnPage);
