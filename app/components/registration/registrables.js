
const days = [
    {
        title: 'today',
        value: new Date()
    },
    {
        title: 'yesterday',
        value: new Date()
    }
];

const times = [
    {
        title: '30 min',
        value: 30,
        list: days
    },
    {
        title: '1 h',
        value: 60,
        list: days
    },
    {
        title: '2 h',
        value: 120,
        list: days
    },
    {
        title: '3 h',
        value: 60,
        list: days
    },
    {
        title: '4 h',
        value: 60,
        list: days
    },
    {
        title: '5 h',
        value: 60,
        list: days
    },
    {
        title: '6 h',
        value: 60,
        list: days
    },
    {
        title: '7 h',
        value: 60,
        list: days
    },
    {
        title: '8 h',
        value: 60,
        list: days
    }
];

export const projects = [
    {
        title: 'projects',
        icon: 'work',
        list: [
            {title: 'nvm', list: times}
        ]
    },
    {
        title: 'internal',
        icon: 'build',
        list: [
            {title: 'recruitment', list: times},
            {title: 'brown-bag', list: times},
            {title: 'standup', list: times},
            {title: 'self-development', list: times}
        ]
    },
    {
        title: 'trainings',
        icon: 'class',
        list: []
    },

    {
        title: 'vacation',
        icon: 'explore',
        list: times
    }
];