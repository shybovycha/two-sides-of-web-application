ourStatsControllers.controller('homeCtrl', [ '$scope', 'session',
    ($scope, session) => {
        $scope.apps = 142;
        $scope.user = session.get();
    }
]);