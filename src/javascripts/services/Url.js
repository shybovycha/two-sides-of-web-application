ourStatsApp.constant('Url', (() => {
    var urls = {
        landing: '/',
        newSession: '/new-session',
        editAccount: '/edit-account',
        listApplications: '/applications',
        newApplication: '/applications/new',

        showApplication: (id) => {
            if (!id)
                id = ':id';

            return `/applications/${id}`;
        },

        editApplication: (id) => {
            if (!id)
                id = ':id';

            return `/applications/${id}/edit`;
        }
    };

    urls.authRequired = [
        urls.editAccount,
        urls.listApplications,
        urls.newApplication,
        urls.showApplication(),
        urls.editApplication()
    ];

    return urls;
})());