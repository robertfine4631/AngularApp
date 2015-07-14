;(function (){
  'use strict';

  angular.module('app')

  .controller('Today', ['$scope', '$http', '$cookies','PARSE',
    function ($scope, $http, $cookies, PARSE){

      $scope.user = $cookies.get('username');

        var distance = function (options) {
          this.distance = options.distance;
        };
      $scope.distance = function (data) {
        $http.post(PARSE.URL + 'classes/distance', data, PARSE.CONFIG).success( function (data){
          console.log(data);
        });
      };

    }
    ]);


}());