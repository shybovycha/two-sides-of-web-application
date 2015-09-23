ourStatsControllers.controller('appDetailsCtrl', [ '$scope', '$routeParams', 'application',
    ($scope, $routeParams, application) => {
        $scope.app = application.get($routeParams.id);
    }
]);