import React, {Component} from 'react';
import {View, Text, Button, SafeAreaView, ScrollView} from 'react-native';
import {Divider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';
import {fonts} from '../../../../assets/styles';
import FormLogin from '../../../../components/organisms/FormLogin/FormLogin';
import {
  login_sg,
  set_login,
  set_logout,
} from '../../../../configs/redux/actions/authActions';
import screens from '../../../../configs/routes/screens';
import MainContainers from '../../../templates/MainContainers';
import styles from './styles';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // count: 1,
      // min: 1,
      // max: 1,
    };
  }

  _login = () => {
    this.props.navigation.replace(screens.job_list);
  };

  render() {
    const {isLoggedIn} = this.props;

    return (
      <MainContainers style={styles.wrapper}>
        <Text style={styles.textGreeting}>Hey, </Text>
        <Text style={styles.textGreeting}>Login Now. </Text>
        <FormLogin onSubmit={this._login} />
      </MainContainers>
    );
  }
}
const mapState = ({authReducer}) => ({
  isLoggedIn: authReducer.isLoggedIn,
});

export default connect(mapState, {set_logout, login_sg, set_login})(LoginPage);
