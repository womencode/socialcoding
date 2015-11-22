module.exports = function SignupDialogCtrl($mdDialog, $window) {
    var self = this;

    self.signup = signup;
    self.cancel = cancel;

    function signup() {
        $window.location.href = '/dashboard/';
    }

    function cancel() {
        console.log('cancel!!');
        $mdDialog.cancel();
    }
};