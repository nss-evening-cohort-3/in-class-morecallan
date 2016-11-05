'use strict';

var app = angular.module("MainApp", []);

app.controller('FormController', function ($scope, $http) {
    $scope.formSubmit = function (user) {
        var jsonedUser = JSON.stringify(user)
        $http.post("/api/AngularApi", jsonedUser).success((response) => console.log("submitted to api!", response));
    }
});