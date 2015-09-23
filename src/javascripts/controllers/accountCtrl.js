ourStatsControllers.controller('accountCtrl', [ '$scope', 'session',
    ($scope, session) => {
        $scope.account = session.get();

        $scope.update = () => {
            session.set($scope.account);
        }
    }
]);