import types from '../actions/types';

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.auth.LOGIN:
      return {...state, isLoggedIn: true};
    case types.auth.LOGOUT:
      return {...state, isLoggedIn: false};
    default:
      return state;
  }
};
