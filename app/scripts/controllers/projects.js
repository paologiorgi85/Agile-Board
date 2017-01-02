myApp.controller('projectsListCtrl', ['ProjectService', '$scope','projects', function(ProjectService, $scope, projects, $http) {
  $scope.projects = projects;
  //ProjectService.getAllProjects($scope);
/*
  $scope.select = function(id) {
    console.log("Into Select projcet function");
    for(i in $scope.projects) {
      if($scope.projects[i].id == id) {
        //we use angular.copy() method to create
        //copy of original object
        $scope.project = angular.copy($scope.projects[i]);
      }
    }
  }
*/
}]);

myApp.controller('projectDetailCtrl', ['ProjectService', '$scope', '$http','$stateParams', '$state', function(ProjectService, $scope, $http, $stateParams, $state) {
  console.log("List of Projects into projectDetailCtrl:");
  $scope.project = ProjectService.getProject();
  //console.log("$scope.project:");
  //console.log($scope.project);
}]);
