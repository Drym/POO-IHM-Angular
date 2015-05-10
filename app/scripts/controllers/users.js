'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('UsersCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.user ={
      id: null,
      name: null,
      surname: null,
      email: null,
      website: null
    };


    $scope.addUser=function()
    {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users',$scope.user)
        .success(function (data) {
          $location.path('/addUser/');
        });
    }

    $scope.delUser = function() {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.user.id)
      .success(function (data) {
        $location.path('/delUser/');
      });
    }

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
      });


    $scope.editUser = function() {
      if (!$scope.user.name) {
          $scope.user.name = '"' + $scope.currentUser.name + '"';
      }
      else {
        $scope.user.name = '"' + $scope.user.name + '"';
      }

      if (!$scope.user.surname) {
          $scope.user.surname = '"' + $scope.currentUser.surname + '"';
      }
      else {
        $scope.user.surname = '"' + $scope.user.surname + '"';
      }

      if (!$scope.user.email) {
          $scope.user.email = '"' + $scope.currentUser.email + '"';
      }
      else {
        $scope.user.email = '"' + $scope.user.email + '"';
      }

      if (!$scope.user.website) {
          $scope.user.website = '"' +$scope.currentUser.website + '"';
      }
      else {
        $scope.user.website = '"' +$scope.user.website + '"';
      }

      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId, '{"id":'+ $routeParams.userId +',"name":'+ $scope.user.name +',"surname":'+ $scope.user.surname +',"email":'+ $scope.user.email +',"website":'+ $scope.user.website +',"createdAt":"","updatedAt":""}')
        .success(function(data) {
          $location.path('/users/'+ $routeParams.userId);
        });
    }


    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if (data.status == "success") {
          $scope.currentUser = data.data;
        }
      });
    }
  }]);
