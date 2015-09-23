ourStatsControllers.controller('newAppCtrl', [ '$scope', '$location', 'application',
    ($scope, $location, application) => {
        $scope.newApp = {};

        $scope.submit = () => {
            application.create($scope.newApp);
            $location.path('/apps/');
        }
    }
]);