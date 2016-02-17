ourStatsControllers.controller('EditAccountCtrl', ['$scope', '$location', 'User', 'Url',
    ($scope, $location, User, Url) => {
        $scope.account = User.get();

        $scope.save = () => {
            User.update($scope.account);
            $location.path(Url.applications);
        };
    }
]);