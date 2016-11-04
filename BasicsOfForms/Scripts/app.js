'use strict';

var app = angular.module("MainApp", []);

app.controller('FormController', function ($scope, $http) {
    $scope.formSubmit = function () {
        var serializedForm = $("#myForm").serialize()
        $http.post("/api/AngularApi", serializedForm).then(() => console.log("submitted to api!"));
    }
});