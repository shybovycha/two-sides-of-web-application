ourStatsControllers.controller('NewApplicationCtrl', ['$scope', '$location', 'Application', 'Url',
    ($scope, $location, Application, Url) => {
        $scope.application = {};

        $scope.save = () => {
            var newApplication = Application.create($scope.application);
            $location.path(Url.application(newApplication.id));
        };
    }
]);