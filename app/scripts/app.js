'use strict';

/**
 * @ngdoc overview
 * @name agileBoardApp
 * @description
 * # agileBoardApp
 *
 * Main module of the application.
 */
var myApp = angular.module('agileBoardApp', [
    'ui.router','ngMaterial', angularDragula(angular),
    'ngAnimate', 'ngCookies', 'ngResource', 'ngSanitize', 'ngMessages',
]);

myApp.run(
  ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
      // to active whenever 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    }
  ]
);

myApp.config(function($stateProvider) {
  var states = [
    {
      name: 'projects',
      url: '/projects',
      controller: 'projectsList',
      //templateUrl: 'views/projects/main.html',
      views: {
        '': { templateUrl: 'views/projects/main.html' },
        'projectlist@projects': {
          templateUrl: 'views/projects/projectlist.html'
        },
        'projectdetail@projects': {
          templateUrl: 'views/projects/projectdetail.html'
        },
        'projectbacklog@projects': {
          templateUrl: 'views/projects/projectbacklog.html'
        }
      }
    },
    {
      name: 'about',
      url: '/about',
      controller: 'AboutCtrl',
      templateUrl: 'views/about/about.html'
    }
  ];
  states.forEach(function(state) {
     $stateProvider.state(state);
  });
});

myApp.config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet('face',  'images/icons/ic_face_black_24px.svg', 24)
    .iconSet('label', 'images/icons/ic_label_24px.svg', 24)
});
