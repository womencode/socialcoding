require('./index.less');

module.exports = ui.module({
    name: 'root',
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