/// <reference path="angular.js" />
var myApp = angular.module("myApp", []);
myApp.controller("uploadFileController", [
    "$scope", "fileUpload", function ($scope, fileUpload) {
        $scope.uploadFile = function() {
            var file = $scope.myFile;
            console.log(file);
            if (file) {
                fileUpload.uploadFileToUrl(file, "/Home/UploadFile/");
            }
        };
    }
]);

myApp.directive("ngFileModel", function() {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            element.bind("change", function() {
                var file = element[0].files[0];

                var reader = new FileReader();

                reader.onload = function(e) {
                    scope.imageFile = reader.result;
                    scope.myFile = file;
                    scope.$apply();
                }

                if (file) {
                    reader.readAsDataURL(file);
                }
            });
        }
    };
});

myApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function (file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);

        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: { 'Content-Type': undefined }
        })

        .success(function () {
            console.log("Okie");
        })

        .error(function () {
        });
    }
}]);