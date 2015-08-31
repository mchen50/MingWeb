(function () {
    'use strict';
    angular.module('mingApp').directive('scroll', function ($window) {
        return function (scope, element, attrs) {

            angular.element($window).bind('scroll', function () {
                if (this.pageYOffset >= 100) {
                    scope.showGotoTop = true;
                    scope.showHeaderText = false;
                } else {
                    scope.showGotoTop = false;
                    scope.showHeaderText = true;
                }
                scope.$apply();
            });
        };
    });
}());