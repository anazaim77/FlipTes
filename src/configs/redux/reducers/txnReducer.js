import types from '../actions/types';

const initialState = {
  objData: {},
  list: {
    all: [],
    queried: [],
  },
};

export const txnReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.txn.LIST_ALL_RD:
      const {array, objData} = action.payload;
      return {...state, objData: objData, list: {all: array, queried: []}};
    case types.txn.LIST_QUERIED_RD:
      return {...state, list: action.payload};
    default:
      return state;
  }
};
