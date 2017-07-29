import { createSelector } from 'reselect';

/**
 * Selectors are like queries for your central state. The Account selectors pull
 * out views of the accounts structure
 */

export const getAccountsState = (state) => state.accounts;
export const getRouterState = (state) => state.router;

export const getAccountsEntities = createSelector(
  getAccountsState,
  ( state ) => state.entities
);

export const getAllAccounts = createSelector(
  getAccountsEntities,
  ( entities ) => Object.keys(entities)
    .map((accountId) => entities[accountId])
);

export const getChannels = createSelector(
  getAllAccounts,
  ( accounts ) => accounts.filter((t) => t.type === 'channel')
);

export const getDirectMessages = createSelector(
  getAllAccounts,
  ( accounts ) => accounts.filter((t) => t.type === 'dm')
);

export const getCurrentAccount = createSelector(
  getAccountsEntities,
  getAccountsState,
  getRouterState,  
  ( entities, accountState, routerState ) =>
    entities[getActiveAccountID(accountState, routerState)]
);

const getActiveAccpountID = (accountState, routerState) => {
  const activeAccount = _.values(accountState.entities).find(
    account => account.name === routerState.currentParams.account
  );
  return activeAccount ? activeAccount.id : null;
};