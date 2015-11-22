require('./index.less');
require('./vendor');

window.ui = require('./ui');

module.exports = ui.module({
    name: 'common',
    components: require('./components')
})();