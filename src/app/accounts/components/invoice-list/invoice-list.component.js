import template from './invoice-list.html';

const InvoiceListComponent = {
  bindings: {},
  templateUrl: template,
  controller: class InvoiceListController {
    constructor(AccountsService, $state, $stateParams) {
      'ngInject';
      this.service = AccountsService;
      this.$state = $state;
      this.account = {id: '', name: '', invoices: []};
      this.id = $stateParams.id;
    }

    $onInit() {
      console.log('form '+ this.id);
      if (this.id) {
        this.loadAccount(this.id);
      }
    }

    loadAccount(id) {
      this.service.getAccount(id).then(response => {
        this.account = response;
      });
    }

    delete(invoice) {
      this.service.deleteInvoice(invoice).then(response => {
          this.loadAccount(this.account.id);
      });
    }

    edit(invoice) {
        this.$state.go('invoices.edit', {id: invoice.accountId, invoiceid: invoice.id});
    }

    addNew() {
        this.$state.go('invoices.new', {id: this.account.id});
    }
    save() {
      this.service.saveAccount(this.account).then(response => {
        this.$state.go('accounts.list');
      });
    }

  }
};

export default InvoiceListComponent;
