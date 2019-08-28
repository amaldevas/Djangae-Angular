var mainApp = angular.module('mainApp', ['ui.router', 'oc.lazyLoad']);

mainApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: '/view/addStudent.htm',
            controller: 'AddStudentController',
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadDependencies: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load([
                        '/static/build/TravelController.js'
                    ]);
                }]
            }
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            url: '/about',
            templateUrl: '/view/viewStudent.htm',
            controller: 'ViewStudentController',
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadDependencies: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load([
                        '/static/build/TravelController.js'
                    ]);
                }]
            }


        })
        .state('register_user', {
            url: '/register_user',
            templateUrl: '/view/ViewStudent.htm',
            controller: 'RegisterStudentController',
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadDependencies: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load([
                        '/static/build/TravelController.js'
                    ]);
                }]
            }


        })
        .state('show_user', {
            url: '/show_user',
            templateUrl: '/view/form.html',
            controller: 'ShowStudentController',
            resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                loadDependencies: ['$ocLazyLoad', function($ocLazyLoad) {
                    // you can lazy load files for an existing module
                    return $ocLazyLoad.load([
                        '/static/build/TravelController.js'
                    ]);
                }]
            }


        });



});
// mainApp.controller('AddStudentController', function($scope) {
//     console.log("HAi");
//     $scope.message = "For Students";
// });
// mainApp.controller('ViewStudentController', function($scope) {
//     $scope.message = "For Employee";
// })