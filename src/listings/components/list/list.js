module.exports = function ListCtrl() {
    var ctrl = this;

    var imagePath = 'img/list/60.jpeg';

    ctrl.users = [
        {
            id: 1,
            firstName: 'Ryan',
            lastName: 'Campbell',
            tag: 'React.js/flux enthusiast, author of react-google-maps',
            desc: "Tom is a JavaScript expert who has passion in creating reusable UI components with React.js. He's also like to use flux to organize complex business logics using unidirectional data-flow. He has",
            skills: ['JavaScript', 'iOS', 'AWS', 'Grails', 'Node.JS']
        }
    ];

    ctrl.phones = [
        { type: 'Home', number: '(555) 251-1234' },
        { type: 'Cell', number: '(555) 786-9841' },
        { type: 'Office', number: '(555) 314-1592' }
    ];

    ctrl.todos = [
        {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face : imagePath,
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
    ];
};