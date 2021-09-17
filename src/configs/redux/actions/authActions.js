import types from './types';

export const set_login = payload => ({
  type: types.auth.LOGIN,
  payload,
});
export const set_logout = payload => ({
  type: types.auth.LOGOUT,
  payload,
});

export const login_sg = payload => ({
  type: types.auth.LOGIN_SG,
  payload,
});
