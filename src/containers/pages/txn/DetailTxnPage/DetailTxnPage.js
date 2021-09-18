import React, {Component} from 'react';
import {Divider, Snackbar} from 'react-native-paper';
import {connect} from 'react-redux';
import NoTxn from '../../../../components/organisms/detailList/NoTxn';
import SummaryTxn from '../../../../components/organisms/detailList/SummaryTxn';
import MainContainers from '../../../templates/MainContainers';

export const DetailTxnContext = React.createContext({});
class DetailTxnPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  onToggleSnackBar = () => {
    this.setState({
      visible: true,
    });
  };
  onDismissSnackBar = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const {data} = this.props;
    const {visible} = this.state;
    return (
      <DetailTxnContext.Provider
        value={{data, onToggleSnackBar: this.onToggleSnackBar}}>
        <MainContainers>
          <NoTxn />
          <Divider />
          <SummaryTxn />
        </MainContainers>
        <Snackbar
          visible={this.state.visible}
          onDismiss={this.onDismissSnackBar}>
          {`ID Transaksi berhasil disalin ke clipboard`}
        </Snackbar>
      </DetailTxnContext.Provider>
    );
  }
}

const mapState = ({txnReducer}, {route}) => ({
  data: txnReducer.objData[route?.params?.id],
});

export default connect(mapState, null)(DetailTxnPage);
