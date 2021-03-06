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

    //Ajouter un utilisateur
    $scope.addUser=function()
    {
      $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Users',$scope.user)
        .success(function (data) {
          $location.path('/addUser/');
        });
    }

    //Supprimer un utilisateur
    $scope.delUser = function() {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.user.id)
      .success(function (data) {
        $location.path('/delUser/');
      });
    }

    //Supprimer un utilisateur (dans show)
    $scope.delUserFast = function() {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.currentUser.id)
        .success(function (data) {
          $location.path('/users/');
        });
    }

    //Récupérer tout les utilisateurs
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users')
      .success(function(data) {
        $scope.users = data.data;
      });

    //Modifier un utilisateur
    $scope.editUser = function() {
      //Si le nom n'est pas modifier, on garde l'ancien
      if (!$scope.user.name) {
          $scope.user.name =  $scope.currentUser.name;
      }
      //Sinon on prend le nouveau
      else {
        $scope.user.name = $scope.user.name;
      }

      if (!$scope.user.surname) {
          $scope.user.surname = $scope.currentUser.surname;
      }
      else {
        $scope.user.surname = $scope.user.surname;
      }

      if (!$scope.user.email) {
          $scope.user.email = $scope.currentUser.email;
      }
      else {
        $scope.user.email = $scope.user.email;
      }

      if (!$scope.user.website) {
          $scope.user.website = $scope.currentUser.website;
      }
      else {
        $scope.user.website = $scope.user.website;
      }

      //On envoit la modification
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId, $scope.user)
        .success(function(data) {
          $location.path('/users/'+ $routeParams.userId);
        });
    }

    //Récupérer tout les projets d'un utilisateur
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId + '/Projects')
      .success(function(data) {
        $scope.UserProjects = data.data;
      });

    //Récupérer la Liste des projets pour ajouter à un utilisateur
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Projects')
      .success(function(data) {
        $scope.projects = data.data;
      });

    //Ajouter un projet a un utilisateur
    $scope.addProjectToUser = function() {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.user.id + '/Projects/' + $scope.project.id)
        .success(function(data) {
          $location.path('/addUserToProject/');
        });
    }

    //Ajouter un projet a un utilisateur (dans show)
    $scope.addProjectToUserFast = function(id) {
      $http.put('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.currentUser.id + '/Projects/' + id)
        .success(function(data) {
          $location.path('/users/'+ $scope.currentUser.id );
        });
    }

    //Supprimer l'association d'un projet a un utilisateur
    $scope.delProjectToUser = function(id) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $scope.user.id + '/Projects/' + $scope.project.id)
        .success(function(data) {
          $location.path('/delUserToProject/');
        });
    }

    //Supprimer l'association d'un projet a un utilisateur (dans show)
    $scope.delProjectToUserFast = function(id) {
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' +  $scope.currentUser.id + '/Projects/' + id)
        .success(function(data) {
          $location.path('/users/'+ $scope.currentUser.id );
        });
    }

    //Récupérer tout les roles d'un utilisateur
    $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId + '/Roles')
      .success(function(data) {
          $scope.UserRoles = data.data;
      });

    //Ajouter un role a un user sur un projet
    $scope.addRoleToUser = function() {
      $scope.role.UserId = $routeParams.userId;
      //Evite la duplication du projet, supprime l'association qui sera recréé juste apres avec le post du role
      $http.delete('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId + '/Projects/' + $scope.role.ProjectId)
        .success(function(data) {
          $http.post('http://poo-ihm-2015-rest.herokuapp.com/api/Roles/', $scope.role)
            .success(function(data) {
              $location.path('/users/'+$scope.currentUser.id);

            });

        });

    }

    //Permet l'utilisation de currentUser
    if($routeParams.userId) {
      $http.get('http://poo-ihm-2015-rest.herokuapp.com/api/Users/' + $routeParams.userId)
      .success(function(data) {
        if (data.status == "success") {
          $scope.currentUser = data.data;
        }
      });
    }
  }]);
