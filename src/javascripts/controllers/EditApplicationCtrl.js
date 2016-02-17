ourStatsControllers.controller('EditApplicationCtrl', ['$scope', '$routeParams', '$location', 'Application', 'Url',
    ($scope, $routeParams, $location, Application, Url) => {
        $scope.application = Application.get($routeParams.id);

        $scope.save = () => {
            Application.update($routeParams.id, $scope.application);
            $location.path(Url.application($routeParams.id));
        };
    }
]);