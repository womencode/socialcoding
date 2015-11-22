module.exports = function ProfileCtrl() {
    var ctrl = this;

    ctrl.user = {
        firstName: 'Ryan',
        skills: [
            {
                name: 'JavaScript',
                desc: '...'
            },
            {
                name: 'iOS',
                desc: '...'
            },
            {
                name: 'AWS',
                desc: '...'
            }]
    };
};