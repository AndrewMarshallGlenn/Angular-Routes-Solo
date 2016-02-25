var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/burton', {
            templateUrl: '/views/templates/burton.html',
            controller: 'BurtonController'
        })
        .when('/strange', {
            templateUrl: '/views/templates/strange.html',
            controller: 'StrangeController'
        })
        .when('/honda', {
            templateUrl: '/views/templates/honda.html',
            controller: 'HondaController'
        })
        .otherwise({
            redirectTo: 'burton'
        });
}]);



