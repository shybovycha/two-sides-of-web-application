var ourStatsControllers = angular.module('ourStatsControllers', []);

ourStatsControllers.controller('homeCtrl', [ '$scope',
    function ($scope) {
        $scope.apps = 142;
    }
]);
