'use strict';
var i = null;

/**
 * @ngdoc function
 * @name agileBoardApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the agileBoardApp
 */
angular.module('agileBoardApp')
  .controller('projectsList', function ($scope) {
    $scope.projectsList = [
      {
          id:1,
          title:"Survey",
          description:"Product location inside the store",
          tags:["survey","product", "store"],
          sprints: [
            {
              id: 0,
              name: "Prototype"
            },
            {
              id: 1,
              name: "Sprint 1"
            },
            {
              id: 2,
              name: "Sprint 2"
            },
            {
              id: 3,
              name: "Fine Tuning"
            }
          ]
      },
      {
          id:2,
          title:"Order",
          description:"Order take",
          tags:["order","product", "price"],
      }
    ]

    $scope.select = function(id) {
    for(i in $scope.projectsList) {
        if($scope.projectsList[i].id == id) {
          //we use angular.copy() method to create
          //copy of original object
            $scope.project = angular.copy($scope.projectsList[i]);
        }
    }
}
  });
