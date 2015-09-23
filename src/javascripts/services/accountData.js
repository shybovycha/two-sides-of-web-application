ourStatsApp.factory('accountData', [ '$cookies',
    ($cookies) => {
        return {
            get: () => {
                return $cookies.getObject('account');
            },
            set: (account) => {
                $cookies.putObject('account', account);
            },
            reset: () => {
                $cookies.remove('account');
            }
        }
    }
]);