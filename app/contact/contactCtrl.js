(function () {
    'use strict';
    angular.module('mingApp').controller('ContactCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.result = 'hidden';

        $scope.resultMessage = '';

        $scope.formData = {
            inputName: '',
            inputEmail: '',
            inputSubject: '',
            inputMessage: ''
        }; //formData is an object holding the name, email, subject, and message

        $scope.submitButtonDisabled = false;
        $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
        $scope.submit = function (emailForm) {
            $scope.submitted = true;
            $scope.submitButtonDisabled = true;
            if (emailForm.$valid) {
                $http({
                    method: 'POST',
                    url: 'http://mingchen.us/back_end/contact-form.php',
                    data: $.param($scope.formData),  //param method from jQuery
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}  //set the headers so angular passing info as form data (not request payload)
                }).success(function (data) {
                    console.log(data);
                    if (data.success) { //success comes from the return json object
                        $scope.submitButtonDisabled = true;
                        $scope.resultMessage = data.message;
                        $scope.result = 'alert-success';
                    } else {
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = data.message;
                        $scope.result = 'alert-danger';
                    }
                });
            } else {
                $scope.submitButtonDisabled = false;
                $scope.resultMessage = 'Please fill out all the fields and try again. :(';
                $scope.result = 'alert-warning';
            }
        }
    }]);
}());