import template from './invoices.html';

const InvoicesComponent = {
  bindings: {},
  templateUrl: template,
  controller: class InvoicesController {
      constructor(AccountsService, $stateParams) {
          'ngInject';
          this.service = AccountsService;
          this.account = {id: '', name: '', invoices: []};
          this.id = $stateParams.id;
      }

      $onInit() {
          if (this.id) {
              this.loadAccount(this.id);
          }
      }

      loadAccount(id) {
          this.service.getAccount(id).then(response => {
              this.account = response;
          });
      }
  }
};

export default InvoicesComponent;
