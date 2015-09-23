ourStatsControllers.controller('sessionCtrl', [ '$scope', 'session', 'accountData',
    ($scope, session) => {
        $scope.newAccount = {};
        $scope.existingAccount = {};

        $scope.signIn = () => {
            session.get($scope.existingAccount);
        };

        $scope.signUp = () => {
            session.create($scope.newAccount);
        };

        $scope.signOut = () => {
            accountData.reset();
        };
    }
]);
