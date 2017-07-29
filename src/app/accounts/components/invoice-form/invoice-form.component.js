import template from './invoice-form.html';

const InvoiceFormComponent = {
  bindings: {},
  templateUrl: template,
  controller: class InvoiceFormController {
    constructor(AccountsService, $state, $stateParams) {
      'ngInject';
      this.service = AccountsService;
      this.$state = $state;
      this.account = {id: '', name: '', invoices: []};
      this.invoice = {id:'', name:'', accountId:'', amount:0, due:0 };
      this.id = $stateParams.id;
      this.invoceId = $stateParams.invoiceid;
    }

    $onInit() {
        let vm = this;
      if (vm.id) {
        this.service.getAccount(this.id).then(response => {
          vm.account = response;
          if (vm.invoceId) {
              let invoice = vm.account.invoices.filter(invoice => ''+invoice.id === vm.invoceId)[0];
              if (invoice) {
                  vm.invoice = invoice;
              } else {
                  vm.invoice.accountId = this.id;
              }
          } else {
              vm.invoice.accountId = this.id;
          }
        });
      }
    }

    save() {
      this.service.saveInvoice(this.invoice).then(response => {
        this.$state.go('invoices.list', {id: this.account.id});
      });
    }

  }
};

export default InvoiceFormComponent;
