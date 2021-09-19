import types from './types';

export const fetch_list_sg = payload => ({
  type: types.txn.FETCH_ALL_SG,
  payload,
});
export const set_list_all_rd = payload => ({
  type: types.txn.LIST_ALL_RD,
  payload,
});
export const set_list_queried_rd = payload => ({
  type: types.txn.LIST_QUERIED_RD,
  payload,
});
export const set_loading_rd = payload => ({
  type: types.txn.LOADING_LIST_RD,
  payload,
});
export const set_loading_done_rd = payload => ({
  type: types.txn.LOADING_LIST_DONE_RD,
  payload,
});
