ourStatsApp.factory('Session', ['$http', 'AccountData', 'MockData',
    ($http, AccountData, MockData) => {
        return {
            get: () => {
                var account = AccountData.get();

                var params = {
                    email: account.email,
                    password: account.password
                };

                // restoring session
                // send data to the server and check if response status == 200
                AccountData.set(MockData.account);
            },

            create: (account) => {
                var params = {
                    name: account.name,
                    email: account.email,
                    password: account.password
                };

                // signing in
                // send data to the server and check if response status == 200
                AccountData.set(MockData.account);
            },

            reset: () => {
                // no requests to the server needed - this is local-only action
                AccountData.reset();
            }
        }
    }
]);