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

myApp.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/projects');

  var states = [
    {
      name: 'projects',
      url: '/projects',
      controller: 'projectsListCtrl',
      resolve: {
        projects: function(ProjectService) {
          return ProjectService.getAllProjects();
        }
      },
      templateUrl: 'views/projects/projectlist.html'
    },
    {
      name: 'projectCard',
      url: '/projects/{projectID}',
      controller: 'projectCardCtrl',
      views: {
        '': {templateUrl: 'views/projects/partial-project-card.html'},
        'project-header@projectCard': {
          controller: 'projectCardCtrl',
          templateUrl: 'views/projects/project-header.html'
        },
        'backlogheader@projectCard': {
          controller: 'projectCardCtrl',
          templateUrl: 'views/projects/projectbacklog/backlogheader.html'
        }
      }
    },
// nested list with custom controller
    {
      name: 'projects.sprints',
      url: ':id/sprints',
      templateUrl: 'views/projects/projectbacklog/backlogheader.html'
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
