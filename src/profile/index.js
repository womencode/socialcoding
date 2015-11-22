module.exports = ui.module({
    name: 'profile',
    url: '',
    abstract: true,
    components: require('./components'),
    subModules: [
        'ngAria',
        'ngMaterial',
        'ngMessages',
        'ngSanitize',
        'ui.router',
        'common'
    ]
})();