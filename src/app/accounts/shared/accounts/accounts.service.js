// import restangular from 'restangular';

export default class AccountsService {

    constructor(Restangular) {
        'ngInject';
        this.Restangular = Restangular;
        this.API_URL = 'http://thinkful-pb-1.getsandbox.com/';
    }

    getAccounts() {
        return this.Restangular.all('accounts').getList();
    }

    getAccount(id) {
        return this.Restangular.one('accounts', id).get();
    }

    saveAccount(account) {
        if (account.id) {
            return this.Restangular.allUrl('accounts/' + account.id).post(account);
        } else {
            return this.Restangular.all('accounts').post(account);
        }
    }

    deleteAccount(account) {
        return this.Restangular.one('accounts', account.id).remove();
    }

    saveInvoice(invoice) {
        if (invoice.id) {
            return this.Restangular
                .allUrl(`accounts/${invoice.accountId}/invoices/${invoice.id}`)
                .post(invoice);
        } else {
            return this.Restangular
                .allUrl(`accounts/${invoice.accountId}/invoices`)
                .post(invoice);
        }
    }

    deleteInvoice(invoice) {
        return this.Restangular.one('accounts', invoice.accountId).one('invoices', invoice.id).remove();
    }

}