module.exports = function SignupDialogCtrl($mdDialog, $window, isMentor, usersService) {
    var ctrl = this;

    ctrl.user = {
      isMentor: isMentor,
        skills: ['JavaScript'],
        languages: ['English']
    };

    ctrl.signup = signup;
    ctrl.cancel = cancel;

    function signup() {
        //ctrl.user.id = usersService.users.length + 1;

        //usersService.users.$add(ctrl.user).then(function () {
            $window.location.href = '/dashboard/';
        //});
    }

    function cancel() {
        $mdDialog.cancel();
    }
};