import angular from 'angular';
import uiRouter from 'angular-ui-router';
import restangular from 'restangular';

import AccountManagerPageComponent from './containers/account-manager-page/account-manager-page.component';
import AccountsComponent from './components/accounts/accounts.component';
import NavComponent from './components/nav/nav';
import AccountListComponent from './components/account-list/account-list.component';
import AccountFormComponent from './components/account-form/account-form.component';
import InvoicesComponent from './components/invoices/invoices.component'
import InvoiceListComponent from './components/invoice-list/invoice-list.component'
import InvoiceFormComponent from './components/invoice-form/invoice-form.component'

import HomeComponent from './components/home/home';
import AccountsService from './shared/accounts/accounts.service';

/**
 * @ngdoc module
 * @name accounts
 *
 * @description Accounts manager
 *
 **/
const AccountsModule = angular
  .module('components.accounts', [
    uiRouter, restangular
  ])
  .config(/*@ngInject*/ ($stateProvider, $urlRouterProvider, RestangularProvider) => {
    RestangularProvider.setBaseUrl('http://thinkful-pb-1.getsandbox.com/');
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('accounts', {
        url: '/accounts',
        component: 'accounts'
      })
      .state('accounts.list', {
        url: '/accounts/list',
        component: 'accountList'
      })
      .state('accounts.new', {
        url: '/accounts/edit',
        component: 'accountForm'
      })
      .state('accounts.edit', {
        url: '/accounts/edit/:id',
        params: {id : '0'},
        component: 'accountForm'
      })

      .state('invoices', {
        url: '/accounts/:id/invoices',
        params: {id : '0'},
        component: 'invoices'
      })
      .state('invoices.list', {
        url: '/accounts/:id/list',
        params: {id : '0'},
        component: 'invoiceList'
      })
      .state('invoices.new', {
        url: '/accounts/:id/edit',
        params: {id : '0'},
        component: 'invoiceForm'
      })
      .state('invoices.edit', {
        url: '/accounts/:id/edit/:invoiceid',
        params: {id : '0', invoiceid: '0'},
        component: 'invoiceForm'
      })

      .state('home', {
        url: '/home',
        component: 'home'
      })
  })
  .component('accountManagerPage', AccountManagerPageComponent)
  .component('accounts', AccountsComponent)
  .component('accountList', AccountListComponent)
  .component('accountForm', AccountFormComponent)
  .component('invoices', InvoicesComponent)
  .component('invoiceList', InvoiceListComponent)
  .component('invoiceForm', InvoiceFormComponent)
  .component('home', HomeComponent)
  .component('navBar', NavComponent)
  .service('AccountsService', AccountsService);

export default AccountsModule;
