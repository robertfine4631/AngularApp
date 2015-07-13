:(function (){

  'use strict';

  angular.module('app', ['ngRoute'])

  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {

        'X-Parse-Application-Id' : '',
        'X-Parse-REST-API-Key' : '',
      }
    }
  })
}());