'use strict';

/**
 * @ngdoc overview
 * @name agileBoardApp
 * @description
 * # agileBoardApp
 *
 * Main module of the application.
 */
angular
  .module('agileBoardApp', [
    'ngMaterial',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMessages',
    angularDragula(angular)
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'projectsList',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('face',  'images/icons/ic_face_black_24px.svg', 24)
    .iconSet('label', 'images/icons/ic_label_24px.svg', 24)
});
