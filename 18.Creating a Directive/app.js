var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'pages/main.html',
            controller: 'mainController'
        })

        .when('/second', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

        .when('/second/:num', {
            templateUrl: 'pages/second.html',
            controller: 'secondController'
        })

});

myApp.controller('mainController', ['$scope', '$log', function ($scope, $log) {

    $scope.name = 'Main';

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function ($scope, $log, $routeParams) {

    $scope.num = $routeParams.num | 1;

}]);

// myApp.directive("searchResult", function () {
//     return {
//         restrict: 'AECM',
//         template:'<a href="#" class="list-group-item list-group-item-action flex-column align-items-start"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">Doe, John</h5></div><p class="mb-1">555 Main St., New York, NY 111</p></a>',
//         replace: false
//     }
// })

myApp.directive("searchResult", function() {
    return {
        restrict: 'AECM',
        template: '<a href="#" class="list-group-item"><h4 class="list-group-item-heading">Doe, John</h4><p class="list-group-item-text">555 Main St., New York, NY 11111</p></a>',
        replace: true
    }
 });