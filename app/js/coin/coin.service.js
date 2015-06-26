;(function (){
  'use strict';

  angular.module('coins')

  .service('coins', ['$http', 'PARSE', '$routScope',

    function ($http, PARSE, $rootScope) {

      //Coin Constructor
      var Coin = function (attributes) {
        this.model = attributes.model;
        this.year = attributes.year;
        this.mintState = attributes.mintState;
        this.country = attributes.country;
      };


    }
  ])
}());