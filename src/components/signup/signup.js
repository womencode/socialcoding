module.exports = function SignupCtrl($mdDialog) {
    var self = this;

    self.openDialog = openDialog;

    function openDialog(ev) {
        $mdDialog.show({
            controller: require('./signup-dialog'),
            template: require('./signup-dialog.tpl.html'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true
        })
    }
};