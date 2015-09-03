(function () {
    'use strict';
    var app = angular.module('mingApp', [
        'common.services',
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'mgcrea.ngStrap.scrollspy',
        'mgcrea.ngStrap.affix']);

    app.config(function ($provide) {
        $provide.decorator('$exceptionHandler',
            ['$delegate',
                function ($delegate) {
                    return function (exception, cause) {
                        exception.message = 'Please contact the web administrator - Ming! \n Message: ' +
                            exception.message;
                        $delegate(exception, cause);
                        alert(exception.message);
                    };
                }]);
    });

    app.config(['$stateProvider',
            '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: 'app/home.html',
                        controller: 'HomeCtrl'
                    })

                    //resume sub pages
                    .state('resume', {
                        url: "/resume",
                        templateUrl: 'app/resume/resume.html',
                        abstract: true,
                        controller: 'ResumeCtrl'
                    })
                    .state('resume.experience', {
                        url: "/experience",
                        templateUrl: 'app/resume/experience.html',
                        controller: 'ExperienceCtrl'
                    })
                    .state('resume.projects', {
                        url: "/projects",
                        templateUrl: 'app/resume/projects.html',
                        controller: 'ProjectsCtrl'
                    })
                    .state('resume.skills', {
                        url: "/skills",
                        templateUrl: 'app/resume/skills.html'
                    })
                    .state('resume.activities', {
                        url: "/activities",
                        templateUrl: 'app/resume/activities.html'
                    })
                    .state('resume.education', {
                        url: "/education",
                        templateUrl: 'app/resume/education.html'
                    })

                    //aboutMing sub pages
                    .state('aboutMing', {
                        url: '/aboutMing',
                        abstract: true,
                        templateUrl: 'app/aboutMing/aboutMing.html'
                    })
                    .state('aboutMing.traveling', {
                        url: '/traveling',
                        templateUrl: 'app/aboutMing/traveling.html'
                    })
                    .state('aboutMing.games', {
                        url: '/games',
                        templateUrl: 'app/aboutMing/games.html'
                    })
                    .state('aboutMing.movies', {
                        url: '/movies',
                        templateUrl: 'app/aboutMing/movies.html'
                    })
                    .state('aboutMing.books', {
                        url: '/books',
                        templateUrl: 'app/aboutMing/books.html'
                    })

                    //contact page
                    .state('contact', {
                        url: '/contact',
                        templateUrl: 'app/contact/contact.html',
                        controller: 'ContactCtrl'
                    })
            }]
    );

    app.controller('AppCtrl', ['$scope', '$location', 'anchorSmoothScroll', function ($scope, $location, anchorSmoothScroll) {
        $scope.showGotoTop = false;

        $scope.gotoTop = function () {
            $location.hash('top');
            anchorSmoothScroll.scrollTo('top');
        };
    }])
}());

