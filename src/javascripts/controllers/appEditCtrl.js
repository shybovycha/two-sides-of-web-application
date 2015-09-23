ourStatsControllers.controller('appEditCtrl', [ '$scope', '$routeParams', '$location', 'application',
    ($scope, $routeParams, $location, application) => {
        $scope.app = application.get($routeParams.id);

        $scope.submit = () => {
            application.update($scope.app);
            $location.path('/apps/');
        };
    }
]);