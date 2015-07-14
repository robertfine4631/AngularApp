;(function (){
  'use strict';

  angular.module('app')

  .controller('Home', ['$scope', '$http','PARSE', '$cookies', '$location',
    function ($scope, $http, PARSE, $cookies, $location){

      $scope.user = $cookies.get('username');

      $scope.logout = function () {
        var removeST = function () {$cookies.remove('sessionToken');};
        var removeUN = function () {$cookies.remove('username');};
        removeST();
        removeUN();
        $location.path('/');
      };

    }
    ]);


}());