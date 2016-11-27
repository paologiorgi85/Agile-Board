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
          backlog:[
            {
              id: 0,
              code: "001",
              icon: "label",
              description: "This is the first item of Prototype.",
              sprint: 0
            },
            {
              id: 1,
              code: "002",
              icon: "face",
              description: "This is the second item of Prototype.",
              sprint: 0
            },
            {
              id: 2,
              code: "003",
              icon: "face",
              description: "This is the second item of Prototype.",
              sprint: 0
            },
            {
              id: 3,
              code: "004",
              icon: "face",
              description: "This is the second item of Prototype.",
              sprint: 0
            },
            {
              id: 4,
              code: "005",
              icon: "face",
              description: "This is the second item of Prototype.",
              sprint: 0
            },
            {
              id: 5,
              code: "006",
              icon: "face",
              description: "This is the second item of Prototype.",
              sprint: 0
            }
          ],
          sprints: [
            {
              id: 0,
              name: "Prototype",
              columns: [
                {
                  id: 0,
                  name: "ToDo"
                },
                {
                  id: 1,
                  name: "In Progress"
                },
                {
                  id: 2,
                  name: "To Test"
                },
                {
                  id: 3,
                  name: "Done"
                }
              ]
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
  },

  function($scope, dragulaService) {
  dragulaService.options($scope, 'fifth-bag', {
      copy: true
    });
  }

);
