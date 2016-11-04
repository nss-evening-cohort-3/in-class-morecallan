'use strict';

var app = angular.module("MainApp", []);

app.controller('FormController', function ($scope) {
    $scope.formSubmit = function () {
        var serializedForm = $("#myForm").serialize()
        console.log(serializedForm)
    }
});