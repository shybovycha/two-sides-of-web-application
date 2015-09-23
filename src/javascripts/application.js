var ourStatsApp = angular.module('ourStatsApp', [ 'ngRoute', 'ngCookies', 'ourStatsControllers' ]);

var ourStatsControllers = angular.module('ourStatsControllers', []);

ourStatsApp.config([ '$routeProvider',
    ($routeProvider) => {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl'
            }).
            when('/sign-in', {
                templateUrl: 'partials/new_session.html',
                controller: 'sessionCtrl'
            }).
            when('/apps', {
                templateUrl: 'partials/application_list.html',
                controller: 'appListCtrl'
            }).
            when('/app/:id', {
                templateUrl: 'partials/application_details.html',
                controller: 'appDetailsCtrl'
            }).
            when('/app/:id/edit', {
                templateUrl: 'partials/edit_application.html',
                controller: 'appEditCtrl'
            }).
            when('/account/edit', {
                templateUrl: 'partials/edit_account.html',
                controller: 'accountCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);
