var myApp = angular.module('myApp', []);

myApp.controller('mainController', function($scope) {
    
});

var searchPeople = function (firstName, lastName, height, age, occupation){
    return 'John Doe'
}

var searchPeopleString = searchPeople.toString();
console.log(searchPeopleString);
