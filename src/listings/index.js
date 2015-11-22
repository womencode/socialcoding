module.exports = ui.module({
    name: 'listings',
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