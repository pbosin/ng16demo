import template from './account-list.html';

const AccountListComponent = {
  bindings: {},
  templateUrl: template,
  controller: class AccountListController {
    constructor(AccountsService, $state) {
      'ngInject';
      this.service = AccountsService;
      this.$state = $state;
      this.list = [];
    }

    $onInit() {
      this.loadAccounts();
    }

    addNew() {
      this.$state.go('accounts.new');
    }

    edit(account) {
      this.$state.go('accounts.edit', {id: account.id});
    }

    deleteAccount(account) {
      this.service.deleteAccount(account).then(response => {
        this.loadAccounts();
      });
    }

    invoices(account) {
      this.$state.go('invoices.list', {id: '' + account.id});
    }

    loadAccounts() {
      this.service.getAccounts().then(response => {
        this.list = response;
      });
    }

  }
};

export default AccountListComponent;
