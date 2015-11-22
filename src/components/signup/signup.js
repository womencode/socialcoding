module.exports = function SignupCtrl($mdDialog) {
    var self = this;

    self.openDialog = openDialog;

    function openDialog(ev, isMentor) {
        $mdDialog.show({
            controller: require('./signup-dialog'),
            controllerAs: 'ctrl',
            template: require('./signup-dialog.tpl.html'),
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            resolve: {
                isMentor: function () {
                    return isMentor;
                }
            }
        })
    }
};