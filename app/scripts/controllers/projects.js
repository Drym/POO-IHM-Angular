'use strict';

/**
 * @ngdoc function
 * @name pooIhmExemplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pooIhmExemplesApp
 */
angular.module('pooIhmExemplesApp')
  .controller('ProjectsCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.project ={
      id: null,
      title : null,
      description : null,
      year : null
    };

    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
      .success(function(data) {
        $scope.projects = data.data;
      });


    $scope.addProject = function() {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/', $scope.project)
    }

    $scope.delProject = function() {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $scope.project.id);
    }

    $scope.editProject = function() {
      if (!$scope.project.title) {
        $scope.project.title = '"' + $scope.currentProject.title + '"';
      }
      else {
        $scope.project.title = '"' +  $scope.project.title + '"';
      }

      if (!$scope.project.description) {
        $scope.project.description = '"' + $scope.currentProject.description + '"';
      }
      else {
        $scope.project.description = '"' +  $scope.project.description + '"';
      }

      if (!$scope.project.year) {
        $scope.project.year = '"' + $scope.currentProject.year + '"';
      }
      else {
        $scope.project.year = '"' +  $scope.project.year + '"';
      }
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Projects/' + $routeParams.projectId, '{"id":'+ $routeParams.projectId +',"title":'+  $scope.project.title +',"description":'+  $scope.project.description +',"year":'+  $scope.project.year +',"createdAt":"","updatedAt":""}')
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
