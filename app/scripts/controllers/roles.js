'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('RolesCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Roles')
      .success(function(data) {
        $scope.roles = data.data;
      });

    /*
    $scope.addRoleToUser = function() {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.user.id + '/Roles/', $scope.role.name)
        .success(function(data) {
          //$location.path('/addUserToProject/');
        });
    }
    */

  }]);
