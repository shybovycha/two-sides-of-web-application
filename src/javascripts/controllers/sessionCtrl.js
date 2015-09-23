ourStatsControllers.controller('sessionCtrl', [ '$scope', '$location', 'user', 'session',
    ($scope, $location, user, session) => {
        $scope.newAccount = {};
        $scope.existingAccount = {};

        $scope.signIn = () => {
            user.find($scope.existingAccount);
            $location.path('/');
        };

        $scope.signUp = () => {
            user.create($scope.newAccount);
            $location.path('/new-app');
        };

        $scope.signOut = () => {
            session.reset();
            $location.path('/');
        };
    }
]);
