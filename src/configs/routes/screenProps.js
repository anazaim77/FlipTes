const {default: screens} = require('./screens');
import * as Pages from '../../containers/pages';

const screenProps = [
  {
    name: screens.login,
    component: Pages.LoginPage,
    options: {
      header: () => null,
    },
  },
  {
    name: screens.register,
    component: Pages.RegisterPage,
  },
  {
    name: screens.txn_list,
    component: Pages.ListTxnPage,
    options: {
      header: () => null,
    },
  },
  {
    name: screens.txn_detail,
    component: Pages.DetailTxnPage,
    options: {},
  },
];

export default screenProps;
