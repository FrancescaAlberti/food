const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/Index.vue')
            },
            {
                path: 'Help',
                component: () =>
                    import ('pages/Help.vue')
            },
            {
                path: 'Dashboard',
                component: () =>
                    import ('pages/Dashboard.vue')
            },
            {
                path: 'Day',
                component: () =>
                    import ('pages/Day.vue')
            },
            {
                path: 'User',
                component: () =>
                    import ('pages/User.vue'),
            },
            {
                path: 'Shopping',
                component: () =>
                    import ('pages/Shopping.vue')
            }

        ]
    },

    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes