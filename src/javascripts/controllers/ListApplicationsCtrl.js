ourStatsControllers.controller('ListApplicationsCtrl', ['$scope', 'Application',
    ($scope, Application) => {
        $scope.update = () => {
            $scope.applications = Application.all();
        };

        $scope.update();
    }
]);