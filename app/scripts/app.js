'use strict';

/**
 * @ngdoc overview
 * @name pooIhmExemplesApp
 * @description
 * # pooIhmExemplesApp
 *
 * Main module of the application.
 */
angular
  .module('pooIhmExemplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/addUser', {
        templateUrl: 'views/Users/addUser.html',
        controller: 'UsersCtrl'
      })
      .when('/preEditUser', {
        templateUrl: 'views/Users/preEditUser.html',
        controller: 'UsersCtrl'
      })
      .when('/editUser/:userId', {
        templateUrl: 'views/Users/editUser.html',
        controller: 'UsersCtrl'
      })
      .when('/addProjectToUserFast/:userId', {
        templateUrl: 'views/Users/addProjectToUserFast.html',
        controller: 'UsersCtrl'
      })
      .when('/delUser', {
        templateUrl: 'views/Users/delUser.html',
        controller: 'UsersCtrl'
      })
      .when('/projects' , {
      templateUrl: 'views/Projects/list.html',
      controller: 'ProjectsCtrl'
      })
      .when('/addProject' , {
        templateUrl: 'views/Projects/addProject.html',
        controller: 'ProjectsCtrl'
      })
      .when('/delProject' , {
        templateUrl: 'views/Projects/delProject.html',
        controller: 'ProjectsCtrl'
      })
      .when('/preEditProject', {
        templateUrl: 'views/Projects/preEditProject.html',
        controller: 'ProjectsCtrl'
      })
      .when('/addUserToProject', {
        templateUrl: 'views/Projects/addUserToProject.html',
        controller: 'ProjectsCtrl'
      })
      .when('/delUserToProject', {
        templateUrl: 'views/Projects/delUserToProject.html',
        controller: 'ProjectsCtrl'
      })
      .when('/addProjectToUser', {
        templateUrl: 'views/Users/addProjectToUser.html',
        controller: 'UsersCtrl'
      })
      .when('/delProjectToUser', {
        templateUrl: 'views/Users/delProjectToUser.html',
        controller: 'UsersCtrl'
      })
      .when('/editProject/:projectId', {
        templateUrl: 'views/Projects/editProject.html',
        controller: 'ProjectsCtrl'
      })
      .when('/users' , {
        templateUrl: 'views/Users/list.html',
        controller: 'UsersCtrl'
      })
      .when('/users/:userId', {
        templateUrl: 'views/Users/show.html',
        controller: 'UsersCtrl'
      })
      .when('/projects/:projectId', {
        templateUrl: 'views/Projects/show.html',
        controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
