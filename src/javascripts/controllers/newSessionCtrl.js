ourStatsControllers.controller('NewSessionCtrl', ['$scope', '$location', 'Session', 'User', 'Url',
    ($scope, $location, Session, User, Url) => {
        $scope.newAccount = {};
        $scope.existingAccount = {};

        $scope.signIn = () => {
            Session.create($scope.existingAccount);
            $location.path(Url.listApplications);
        };

        $scope.signUp = () => {
            User.create($scope.newAccount);
            $location.path(Url.listApplications);
        };

        $scope.signOut = () => {
            Session.reset();
            $location.path(Url.landing);
        };
    }
]);