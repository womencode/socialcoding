module.exports = function SignupDialogCtrl($mdDialog) {
    var self = this;

    self.signup = signup;
    self.cancel = cancel;

    function signup() {
        // go to next page
    }

    function cancel() {
        $mdDialog.cancel();
    }
};