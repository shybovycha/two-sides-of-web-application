ourStatsApp.factory('user', [ '$http', 'accountData',
    ($http, accountData) => {
        var testAccount = {
                    name: "Artem",
                    email: "artem@ourstats.com"
                };

        return {
            find: (account) => {
                var params = {
                    email: account.email,
                    password: account.password
                };

                accountData.set(testAccount);
            },

            create: (account) => {
                var params = {
                    name: account.name,
                    email: account.email,
                    password: account.password
                };

                accountData.set(params);
            },

            update: (account) => {
                var params = accountData.get();

                params.name = account.name;

                accountData.set(params);
            }
        }
    }
]);