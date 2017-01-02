myApp.service('ProjectService', function($http, $state) {
  var service = {

    getAllProjects: function() {
      console.log("Service - function: getAllProjects()");
      return $http.get('data/projects.json', { cache: true }).then(function(res) {
        //console.log(res.data);
        return res.data;
      })
    }

    /* Add Service here */
    
  }
  return service;
})
