import template from './account-form.html';

const AccountFormComponent = {
  bindings: {},
  templateUrl: template,
  controller: class AccountFormController {
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
        this.service.getAccount(this.id).then(response => {
          this.account = response;
        });
      }
    }

    save() {
      this.service.saveAccount(this.account).then(response => {
        this.$state.go('accounts.list');
      });
    }

  }
};

export default AccountFormComponent;
