const pageContexts = require('./page-contexts');

module.exports = [
    {
        component: require.resolve('../templates/index.tsx'),
        context: pageContexts.home,
    },
];
