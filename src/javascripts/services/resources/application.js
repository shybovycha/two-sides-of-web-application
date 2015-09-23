ourStatsApp.factory('application', [ '$http',
    ($http) => {
        var testApps = [
                {
                    id: "1",
                    name: "Test App #1",
                    token: "APP1TKN",
                    stats: {
                        byCountry: [
                            {
                                country: 'USA',
                                amount: 190
                            }
                        ]
                    }
                },
                {
                    id: "2",
                    name: "Test App #2",
                    token: "APP1TOK",
                    stats: {
                        byCountry: [
                            {
                                country: 'North Korea',
                                amount: 85
                            }
                        ]
                    }
                },
                {
                    id: "3",
                    name: "Test App #3",
                    token: "APP3TKN",
                    stats: {
                        byCountry: [
                            {
                                country: 'Chile',
                                amount: 98
                            }
                        ]
                    }
                },
                {
                    id: "4",
                    name: "Test App #4",
                    token: "APP4TOK",
                    stats: {
                        byCountry: [
                            {
                                country: 'Germany',
                                amount: 42
                            }
                        ]
                    }
                },
                {
                    id: "5",
                    name: "Test App #5",
                    token: "APP5TKN",
                    stats: {
                        byCountry: [
                            {
                                country: 'Pakistan',
                                amount: 17
                            }
                        ]
                    }
                }
            ];

        return {
            all: () => {
                return testApps;
            },

            get: (appId) => {
                var found = testApps.filter((a) => {
                    return a.id === appId;
                });

                return (found.length > 0) ? found[0] : null;
            },

            update: (application) => {
                testApps = testApps.map((a) => {
                    if (a.id === application.id)
                        return application;
                    else
                        return a;
                });
            },

            create: (application) => {
                var id = parseInt(testApps[testApps.length - 1].id) + 1;

                application.id = id.toString();
                application.token = (id % 2 === 0) ? "APP" + id + "TOK" : "TKN" + id + "APP";
                application.stats = { byCountry: [] };

                testApps.push(application);
            }
        }
    }
]);