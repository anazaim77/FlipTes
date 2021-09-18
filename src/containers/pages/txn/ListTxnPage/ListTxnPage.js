import React, {Component} from 'react';
import {FlatList} from 'react-native';
import {connect} from 'react-redux';
import CardTxn from '../../../../components/molecules/cards/CardTxn';
import HeaderSearchFilter from '../../../../components/organisms/txnList/HeaderSearchFilter';
import {fetch_list_sg} from '../../../../configs/redux/actions/txnActions';
import screens from '../../../../configs/routes/screens';
import {
  getSorting,
  searchFind,
  stableSort,
  stableSort2,
} from '../../../../helper/listHelper';
import MainContainers from '../../../templates/MainContainers';
import styles from './styles';

class ListTxnPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      order: 'asc',
      orderBy: '',
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

  handleSort = value => {
    const val = value.split('-');
    // console.log(`val`, val);
    this.setState({
      order: val[1],
      orderBy: val[0],
    });
  };

  render() {
    const {all, queried} = this.props;
    const {query, order, orderBy} = this.state;
    console.log(`all`, all);
    return (
      <MainContainers noScroll style={styles.wrapper}>
        <HeaderSearchFilter
          query={query}
          onChangeQuery={this.handleChangeQuery}
          onSort={this.handleSort}
        />
        <FlatList
          // data={searchFind(all, query)}
          data={searchFind(stableSort(all, getSorting(order, orderBy)), query)}
          // data={searchFind(stableSort2(all, order, orderBy), query)}
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
