var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

myApp.controller('mainController', function($log, $scope, $filter, $resource) {
    console.log($scope);
    console.log($log);
    console.log($filter);
    
    $log.log('Hello');
    $log.error('Some Error occur');
    $log.debug('Some Debug');
    $log.info('This is infomation');
    $log.warn('This is warning');
    
    $scope.name = 'John';
    $scope.formattedName = $filter('uppercase')($scope.name);
    $log.info($scope.name);
    $log.info($scope.formattedName);

    console.log($resource);
    

});