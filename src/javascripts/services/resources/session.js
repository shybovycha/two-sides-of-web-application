ourStatsApp.factory('session', [ '$http', 'accountData',
    ($http, accountData) => {
        var testAccount = {
                    name: "Artem",
                    email: "artem@ourstats.com"
                };

        return {
            get: (account) => {
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

                accountData.set(testAccount);
            }
        }
    }
]);