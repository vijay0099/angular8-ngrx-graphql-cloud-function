import * as R from 'ramda';
const children = [
    {
        id: 'child1',
        firstName: 'Karl',
        achievements: ['Survived holocaust', 'Scored triple double']
    },
    {
        id: 'child2',
        firstName: 'Baba',
        achievements: ['Conquered irritable bowel syndrome']
    },
    { id: 'child3', firstName: 'Baba', achievements: [] }
    // { id: 'child4' },
    // null
];
const needs = [
    { id: 'need1', title: 'A birthday present', belongsTo: 'child1' },
    { id: 'need2', title: 'Financial aid monthly', belongsTo: 'child2' },
    { id: 'need3', title: 'Tutelage', belongsTo: 'child3' },
    { id: 'need4', title: 'Need 4', belongsTo: 'child2' },
    { id: 'need5', title: 'Need 5', belongsTo: 'child1' }
];
R.innerJoin((record, id) => record.belongsTo === id, needs, [
    'child1',
    'child2',
    'child3'
]); //?
//# sourceMappingURL=testing.js.map