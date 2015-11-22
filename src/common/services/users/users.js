var Firebase = require('firebase');

module.exports = function UsersService($firebaseArray) {
    var self = this
      , ref = new Firebase("https://torrid-heat-3849.firebaseio.com/users");

    self.users = $firebaseArray(ref);
};