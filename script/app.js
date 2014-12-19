var app = angular.module('foursquare', []);

  app.controller('foursquareController', function( $scope, fourSquareServerId ){
    $scope.results = [];

    $scope.submitForm = function(){
      fourSquareServerId.getAPI($scope.search).success( function(data){

        if(data.response.venues.length > 0){
          angular.forEach(data.response.venues, function(users, index){

            $scope.results.push(users);
            console.log($scope.results);
          });
        }
        else $scope.confirm = "True";
        console.log($scope.results);
      });
    }
  });

  app.factory('fourSquareServerId', ['$http', function($http){
    var url = "https://api.foursquare.com/v2/venues/search?client_id=2W3FEHKKUS5VJURDMO0WUV2PFYDGCFGYWPVWPWBHSBR2MRSP&client_secret=MUORUSSSGSCDZRYJMMV3QDJFJ0GTYUVKXHST50IOGLUGFPWI&v=20140806&m=foursquare&near=lagos,lagos";
    var foursquareItems = {};
    console.log(url);

    foursquareItems.getAPI = function( searchval ){
      return $http.get(url, {params: { query: searchval } });
    };
    return foursquareItems;
  }]);