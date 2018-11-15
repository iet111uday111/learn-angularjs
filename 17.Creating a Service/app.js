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

myApp.service('nameservice', function(){
    var self = this;
    this.name = 'John Doe';
    this.nameLength = function(){
        return self.name.length;
    }
});

myApp.controller('mainController', ['$scope', '$log', 'nameservice', function($scope, $log, nameservice){
    
    $scope.name = nameservice.name;
    $log.log(nameservice.name);
    $log.log(nameservice.nameLength());
    $scope.$watch('name', function(){
        nameservice.name = $scope.name;
    });
    
}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams','nameservice', function($scope, $log, $routeParams, nameservice) {
    $scope.num = $routeParams.num | 1;    
    $scope.name = nameservice.name;
    $log.log(nameservice.name);
    $log.log(nameservice.nameLength());
    $scope.$watch('name', function(){
        nameservice.name = $scope.name;
    });
}]);