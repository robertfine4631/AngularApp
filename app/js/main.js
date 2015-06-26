;( function (){

	'use strict';

angular.module('coins', ['ngRoute'])

.constant('PARSE', {
	URL: 'https://api.parse.com/1/',
	CONFIG: {
		headers: {
			'X-Parse-Application-Id' : 'gZcSfY6q4Ye2GPKlHJ3518HsvIZleOkG0ViORhU1',
			'X-Parse-REST-API-Key' : 'o8JsbLYim5gZq1rCNevzuJmbKUTrXhbSDD52qKlq'
		}
	}
})

}())