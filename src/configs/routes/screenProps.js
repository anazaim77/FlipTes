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
];

export default screenProps;
