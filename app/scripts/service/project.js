myApp.service('ProjectService', function($http, $state) {
  var service = {

    getAllProjects: function() {
      console.log("Service - function: getAllProjects()");
      return $http.get('data/projects.json', { cache: true }).then(function(res) {
        //console.log(res.data);
        return res.data;
      })
    },

    getProject: function() {
      console.log("Service - function: getProject()");
      var pippo = $http.get('data/projects.json', { cache: true });
      return $http.get('data/projects.json', { cache: true }).then(function(res) {

        console.log("res.data[$state.params['projectID']]");
        console.log(res.data[$state.params['projectID']]);
        return res.data[$state.params['projectID']];
      })
    }
  }
  return service;
})
