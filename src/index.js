require('./index.less');

module.exports = ui.module({
    name: 'root',
    url: '',
    abstract: true,
    subModules: [
        'ngAria',
        'ngMaterial',
        'ngMessages',
        'ngSanitize',
        'ui.router',
        'common'
    ]
})();