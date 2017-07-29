
/**
 * accounts.actions specifies _action creators_ (i.e. objects that describe
 * changes to the reducers) that are concerned with Accounts and Invoices
 */

export const ADD_ACCOUNT = 'ADD_ACCOUNT';
export const ADD_INVOICE = 'ADD_INVOICE';

export const addAccount = (account) => ({
  type: ADD_ACCOUNT,
  payload: {
    account
  }
});

export const addInvoice = (account, invoiceArgs) => {
  const defaults = {
    account: account,
    invoice: {}
  };
  const invoice = Object.assign({}, defaults, invoiceArgs);

  return {
    type: ADD_INVOICE,
    payload: {
      account,
      invoice
    }
  };
};
