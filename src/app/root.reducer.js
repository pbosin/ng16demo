import { combineReducers } from 'redux';
import { AccountsReducer } from './accounts/shared/accounts/accounts.reducer';
import { router } from 'redux-ui-router';

/**
 * @ngdoc module
 * @name Reducer
 *
 * @description
 *
 * This is the root reducer
 *
 **/
const rootReducer = combineReducers({
  accounts: AccountsReducer,
  router
});

export default rootReducer;
