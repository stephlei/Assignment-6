angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://api/listings');
      },

      create: function(listing) {
        return $http.post('http://api/listings', listing);
      }, 

      read: function(id) {
        return $http.get('http://api/listings/' + id);
      }, 

      update: function(id, listing) {
        return $http.put('http://api/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('http://api/listings/' + id);
      }
    };

    return methods;
  }
]);