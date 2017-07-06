'use strict';

angular.module('myApp.accounts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/accounts', {
    templateUrl: 'accounts/accounts.html',
    controller: 'AccountsCtrl'
  });
}])

.controller('AccountsCtrl', [function() {

}]);