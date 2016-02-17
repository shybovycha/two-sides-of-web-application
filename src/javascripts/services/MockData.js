ourStatsApp.constant('MockData', {
    account: {
        name: 'Artem',
        email: 'artem@ourstats.com',
        password: 'abc123'
    },
    applications: [
        {
            id: 0,
            name: 'App #1',
            token: 'APP1TOK',
            stats: {
                byCountry: [
                    {country: 'Poland', amount: 10},
                    {country: 'USA', amount: 190},
                    {country: 'Algeria', amount: 5}
                ]
            }
        }, {
            id: 1,
            name: 'App #2',
            token: 'APP2TOK',
            stats: {
                byCountry: [
                    {country: 'Vietnam', amount: 7},
                    {country: 'New Zeland', amount: 19},
                    {country: 'USA', amount: 15}
                ]
            }
        }, {
            id: 2,
            name: 'App #3',
            token: 'APP3TOK',
            stats: {
                byCountry: [
                    {country: 'USA', amount: 95}
                ]
            }
        }
    ]
});