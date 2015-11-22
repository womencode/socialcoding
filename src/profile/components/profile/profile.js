var _ = require('lodash');

module.exports = function ProfileCtrl(usersService, $window) {
    var ctrl = this;

    ctrl.random = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);

    usersService.users.$watch(function () {
       ctrl.user = _.find(usersService.users, {id: Number($window.location.search.substr(1))});
    });
};