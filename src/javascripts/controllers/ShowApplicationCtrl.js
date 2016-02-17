ourStatsControllers.controller('ShowApplicationCtrl', ['$scope', '$routeParams', 'Application',
    ($scope, $routeParams, Application) => {
        $scope.fromDate = new Date();
        $scope.toDate = new Date();

        $scope.update = () => {
            $scope.application = Application.get($routeParams.id, $scope.fromDate, $scope.toDate);
        };

        $scope.update();
    }
]);