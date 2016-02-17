ourStatsApp.factory('User', ['$http', 'AccountData', 'MockData',
    ($http, AccountData, MockData) => {
        return {
            get: () => {
                return AccountData.get();
            },

            create: (account) => {
                var params = {
                    email: account.email,
                    name: account.name,
                    password: account.password
                };

                // creating new user account
                // send data to the server and check if response status == 200
                AccountData.set(MockData.account);
            },

            update: (account) => {
                var params = {
                    name: account.name,
                    email: account.email,
                    password: account.password
                };

                var existingAccount = AccountData.get();

                // updating user account
                // send data to the server and check if response status == 200
                AccountData.set(MockData.account);
            }
        }
    }
]);