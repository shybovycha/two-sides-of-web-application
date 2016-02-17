ourStatsApp.factory('Application', ['$http', 'MockData', ($http, MockData) => {
    return {
        create: (application) => {
            // send data to the server and check if response status == 200; return application (arg)
            return application;
        },

        get: (id, fromDate, toDate) => {
            // fromDate and toDate are used for stats filtering
            // send data to the server and return response
            return MockData.applications[id];
        },

        update: (id, application) => {
            // send data to the server and check if response status == 200; return application (arg)
            return application;
        },

        all: () => {
            // send request to the server and return the response
            return MockData.applications;
        }
    };
}]);