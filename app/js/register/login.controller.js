;(function (){
  'use strict';

  angular.module('app')

  .controller('Login', ['$scope', '$http', 'PARSE', '$location', '$cookies',
    function ($scope, $http, PARSE, $location, $cookies){

      var user = function (options) {
        this.userName = options.userName;
        this.password = options.password;
      };

      $scope.login = function (user) {
        $http.get(PARSE.URL + 'login?username=' + user.userName + '&password=' + user.password, PARSE.CONFIG).success ( function (good){
          $cookies.put('sessionToken', good.sessionToken);
          $cookies.put('username', good.username);
          $location.path('#/home');
          $scope.user = {};
        });
      };

    }
    ]);


}());