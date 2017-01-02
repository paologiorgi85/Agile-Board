myApp.controller('projectsListCtrl', ['ProjectService', '$scope','projects', function(ProjectService, $scope, projects, $http) {
  console.log("Into the projectsListCtrl");
  $scope.projects = projects;
}]);

myApp.controller('projectDetailCtrl', ['ProjectService', '$scope', '$http','$stateParams', '$state', function(ProjectService, $scope, $http, $stateParams, $state) {
  console.log("Into the projectDetailCtrl");
  return $http.get('data/projects.json', { cache: true }).then(function(res) {
    for(var i=0;i<res.data.length;i++) {
      if(res.data[i].id == $state.params['projectID']) {
        $scope.project = angular.copy(res.data[i]);
      }
    }
  }
)}]);
