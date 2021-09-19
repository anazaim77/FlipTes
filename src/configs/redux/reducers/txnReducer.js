import types from '../actions/types';

const initialState = {
  dataTxn: {},
  loadingRefresh: false,
};

export const txnReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.txn.LIST_ALL_RD:
      const {array, dataTxn} = action.payload;
      return {...state, dataTxn: dataTxn};
    case types.txn.LIST_QUERIED_RD:
      return {...state, list: action.payload};
    case types.txn.LOADING_LIST_RD:
      return {...state, loadingRefresh: true};
    case types.txn.LOADING_LIST_DONE_RD:
      return {...state, loadingRefresh: false};
    default:
      return state;
  }
};

export const getTxnList = state => {
  return Object.values(state.txnReducer.dataTxn);
};
export const getDetailList = (state, id) => {
  return state.txnReducer.dataTxn[id];
};
