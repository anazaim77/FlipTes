import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {txnReducer} from './txnReducer';

export default rootReducer = combineReducers({authReducer, txnReducer});
