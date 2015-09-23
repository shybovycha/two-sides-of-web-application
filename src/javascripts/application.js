var ourStatsApp = angular.module('ourStatsApp', [ 'ngRoute', 'ourStatsControllers' ]);

ourStatsApp.config([ '$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/home.html',
                controller: 'homeCtrl'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);
