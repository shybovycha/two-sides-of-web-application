ourStatsControllers.controller('appListCtrl', [ '$scope', 'application',
    ($scope, application) => {
        $scope.apps = application.all();
    }
]);