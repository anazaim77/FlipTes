import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, Divider} from 'react-native-paper';
import {connect} from 'react-redux';
import NoTxn from '../../../../components/organisms/detailList/NoTxn';
import SummaryTxn from '../../../../components/organisms/detailList/SummaryTxn';
import MainContainers from '../../../templates/MainContainers';

export const DetailTxnContext = React.createContext({});
class DetailTxnPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {data} = this.props;
    return (
      <DetailTxnContext.Provider value={{data}}>
        <MainContainers>
          <NoTxn />
          <Divider />
          <SummaryTxn />
        </MainContainers>
      </DetailTxnContext.Provider>
    );
  }
}

const mapState = ({txnReducer}, {route}) => ({
  data: txnReducer.objData[route?.params?.id],
});

export default connect(mapState, null)(DetailTxnPage);
