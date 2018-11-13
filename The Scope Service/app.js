var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    $scope.name = 'Udayaditya Singh';
    $scope.occupupation = 'developer';
    $scope.getName = function(){
        return 'Udayaditya Singh'
    };
    console.log($scope)
});