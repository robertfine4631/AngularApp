;(function (){
  'use strict';

  angular.module('app')

  .controller('Register', ['$scope', '$http', 'PARSE', '$location', '$cookies',
    function ($scope, $http, PARSE, $location, $cookies){

      var register = function (options) {
        this.username = options.username;
        this.password= options.password;
      };

      $scope.registration = function (data) {
        $http.post(PARSE.URL + 'users', data, PARSE.CONFIG).success( function (data){
          console.log(data);

          $cookies.put('sessionToken', data.sessionToken);
          $cookies.put('username', data.username);

          $location.path('/home');

          $scope.registration = {};
        });
      };
      // End of Registration function

      var user = function (options) {
        this.username = options.username;
        this.password = options.password;
      };

      $scope.login = function (user) {
        $http.get(PARSE.URL + 'login?username=' + user.username + '&password' + user.password, PARSE.CONFIG)
        .success ( function (good){
          $cookies.put('sessionToken', good.sessionToken);
          $cookies.put('username', good.username);
          $location.path('/home');
          $scope.user = {};
        });
      };

    }
    ]);


}());