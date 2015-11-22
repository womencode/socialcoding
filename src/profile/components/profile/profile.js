var _ = require('lodash');

module.exports = function ProfileCtrl(usersService, $window) {
    var ctrl = this;

    usersService.users.$watch(function () {
       ctrl.user = _.find(usersService.users, {id: Number($window.location.search.substr(1))});
    });
};