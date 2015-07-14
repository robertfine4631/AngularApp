;(function (){

  'use strict';

  angular.module('app', ['ngRoute', 'ngCookies'])

  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {

        'X-Parse-Application-Id' : 'Oe2pr6X4ikeLrUZ5DW8ztm1FdubaMrGC40skZZel',
        'X-Parse-REST-API-Key' : 'Mjdzx3qmyLWY7nrIpNWyuvHHmoTxKUvkXokwBLtR',
      }
    }
  })


  .config(function ($routeProvider){
    $routeProvider

    .when('/', {
      templateUrl: 'js/register/register.tpl.html',
      controller: 'Register'
    })

    .when('/login',{
      templateUrl: 'js/register/login.tpl.html',
      controller: 'Login'
    })

    .when('/home',{
      templateUrl: 'js/home/home.tpl.html',
      controller: 'Home'
    })

    .when('/distance_today',{
      templateUrl: 'js/distance/todaydistance.tpl.html',
      controller: 'Today'
    })

    .when('/total_distance', {
      templateUrl: 'js/distance/totaldistance.tpl.html',
      controller: 'Total'
    });
  });

}());