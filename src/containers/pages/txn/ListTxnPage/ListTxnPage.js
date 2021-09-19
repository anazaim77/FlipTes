import React, {Component} from 'react';
import {ActivityIndicator, FlatList, RefreshControl} from 'react-native';
import {connect} from 'react-redux';
import {colour} from '../../../../assets/styles';
import CardTxn from '../../../../components/molecules/cards/CardTxn';
import HeaderSearchFilter from '../../../../components/organisms/txnList/HeaderSearchFilter';
import {fetch_list_sg} from '../../../../configs/redux/actions/txnActions';
import {getTxnList} from '../../../../configs/redux/reducers/txnReducer';
import screens from '../../../../configs/routes/screens';
import {
  getSorting,
  searchFind,
  stableSort,
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
    this.handleRefresh();
  }

  handleRefresh = () => {
    const {fetch_list_sg} = this.props;
    fetch_list_sg();
    // clean filter
    this.setState({query: ''});
  };

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
    const {all, loadingRefresh} = this.props;
    const {query, order, orderBy} = this.state;
    console.log(`all`, all);
    return (
      <MainContainers noScroll style={styles.wrapper}>
        <HeaderSearchFilter
          query={query}
          onChangeQuery={this.handleChangeQuery}
          onSort={this.handleSort}
          refresh={loadingRefresh}
        />
        {/* {loadingRefresh ? (
          <ActivityIndicator size={'large'} color={colour.PRIMARY} />
        ) : ( */}
        <FlatList
          refreshControl={
            <RefreshControl
              colors={[colour.PRIMARY]}
              refreshing={loadingRefresh}
              onRefresh={this.handleRefresh}
            />
          }
          data={searchFind(stableSort(all, getSorting(order, orderBy)), query)}
          contentContainerStyle={{paddingBottom: 200}}
          renderItem={({item, index}) => (
            <CardTxn data={item} onPress={this._goToDetail} key={index} />
          )}
        />
        {/* )} */}
      </MainContainers>
    );
  }
}

const mapState = state => ({
  all: getTxnList(state),
  loadingRefresh: state.txnReducer.loadingRefresh,
});

const mapDispatch = {
  fetch_list_sg,
};

export default connect(mapState, mapDispatch)(ListTxnPage);
