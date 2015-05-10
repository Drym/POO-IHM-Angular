'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', '$location', function ($scope, $http, $routeParams, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
      .success(function(data) {
        $scope.projects = data.data;
      });

    //List user pour ajouter a un project
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
      });

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId + '/Users')
      .success(function(data) {
        $scope.ProjectUsers = data.data;
      });

    $scope.addProject = function() {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/', $scope.project)
        .success(function(data) {
          $location.path('/addProject/');
        });
    }

    $scope.delProject = function() {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $scope.project.id)
        .success(function(data) {
          $location.path('/delProject/');
        });
    }

    $scope.editProject = function() {
      if (!$scope.project.title) {
        $scope.project.title = $scope.currentProject.title;
      }
      else {
        $scope.project.title = $scope.project.title;
      }

      if (!$scope.project.description) {
        $scope.project.description = $scope.currentProject.description;
      }
      else {
        $scope.project.description = $scope.project.description;
      }

      if (!$scope.project.year) {
        $scope.project.year = $scope.currentProject.year;
      }
      else {
        $scope.project.year = $scope.project.year;
      }
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId, $scope.project)
        .success(function(data) {
          $location.path('/projects/' + $routeParams.projectId);
        });
    }

    $scope.addUserToProject = function() {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $scope.project.id + '/Users/' + $scope.user.id)
        .success(function(data) {
          $location.path('/addUserToProject/');
        });
    }


    if($routeParams.projectId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId)
        .success(function(data) {
          if (data.status == "success") {
            $scope.currentProject = data.data;
          }
        });
    }

  }]);
