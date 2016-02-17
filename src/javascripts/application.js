var ourStatsApp = angular.module('ourStatsApp', [ 'ngRoute', 'ourStatsControllers' ]);

var ourStatsControllers = angular.module('ourStatsControllers', [ 'ngCookies' ]);

ourStatsApp.config(['$routeProvider', 'Url',
        ($routeProvider, Url) => {
            $routeProvider
                .when(Url.landing, {
                    templateUrl: 'landing-page.html',
                    controller: 'LandingPageCtrl'
                })
                .when(Url.newSession, {
                    templateUrl: 'new-session.html',
                    controller: 'NewSessionCtrl'
                })
                .when(Url.editAccount, {
                    templateUrl: 'edit-account.html',
                    controller: 'EditAccountCtrl'
                })
                .when(Url.listApplications, {
                    templateUrl: 'list-applications.html',
                    controller: 'ListApplicationsCtrl'
                })
                .when(Url.newApplication, {
                    templateUrl: 'new-application.html',
                    controller: 'NewApplicationCtrl'
                })
                .when(Url.editApplication(), {
                    templateUrl: 'edit-application.html',
                    controller: 'EditApplicationCtrl'
                })
                .when(Url.showApplication(), {
                    templateUrl: 'show-application.html',
                    controller: 'ShowApplicationCtrl'
                })
                .otherwise({
                    redirectTo: Url.landing
                });
        }])
    .run(['$rootScope', '$location', 'Session', 'AccountData', 'Url',
        ($rootScope, $location, Session, AccountData, Url) => {
            $rootScope.$on('$routeChangeStart', (event, current, next) => {
                // check if user is authenticated for selected URLs only
                // first, try to restore his session
                // if this failed because user has no AccountData cookie - redirect him to newSession page
                if (Url.authRequired.indexOf($location.path()) > -1 && !Session.get() && !AccountData.get())
                    $location.path(Url.newSession);
            });
        }]);