require('./index.less');
require('./vendor');

window.ui = require('./ui');

module.exports = ui.module({
    name: 'common',
    subModules: [
        require('./header')
    ]
})();