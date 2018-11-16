var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$log','$filter','$timeout', function($scope, $log, $filter, $timeout) {
    
    $scope.handle = '';
    $scope.lowercaseHandle = function(){
        return $filter('lowercase')($scope.handle);
    }

    $scope.$watch('handle', function(newValue, oldValue){
        console.info('Changed!');
        console.log('OldValue: '+oldValue);
        console.log('NewValue: '+newValue);
    });

    // setTimeout(() => {
    //     $scope.$apply(function(){
    //         $scope.handle = 'newtwitterhandle';
    //         console.log('Scope Changed');
    //     });
    // },3000);

    $timeout(function(){
        $scope.handle = 'newTwitterHandle';
        console.log('Scope Changed');
    },3000)
    
}]);