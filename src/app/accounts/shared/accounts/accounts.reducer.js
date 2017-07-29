import {
  ADD_ACCOUNT,
  ADD_INVOICE
} from './accounts.actions';

const INITIAL_STATE = {
  ids: [],
  currentAccountId: null,
  entities: {}
};

/**
 * The `AccountsReducer` describes how to modify the accounts state given a
 * particular action.
 */
export const AccountsReducer =
  function(state = INITIAL_STATE, {meta, payload, type}) {
  switch (type) {

    // Adds a new Account to the list of entities
    case ADD_ACCOUNT: {
      const account = payload.account;

      if (state.ids.includes(account.id)) {
        return state;
      }

      return {
        ids: [ ...state.ids, account.id ],
        currentAccountId: state.currentAccountId,
        entities: Object.assign({}, state.entities, {
          [account.id]: account
        })
      };
    }

    // Adds a new Invoice to a particular Account
    case ADD_INVOICE: {
      const account = payload.account;
      const invoice = payload.invoice;
        //TODO
      return state;
    }

    default:
      return state;
  }
};
