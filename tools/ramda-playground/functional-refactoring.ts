// EXAMPLES

// // eqProps('id', {id: 1}, {id: 1})
// eqProps('id', p1, p2)

// const fn = R.cond([
//   [R.equals(0), R.always('water freezes at 0°C')],
//   [R.equals(100), R.always('water boils at 100°C')],
//   [R.T, temp => 'nothing special happens at ' + temp + '°C']
// ]);
// fn(0);
// fn(50); //=> 'nothing special happens at 50°C'
// fn(100); //=> 'water boils at 100°C'

// const people = [
//   {id: 1, name: 'fred', age: 28},
//   {id: 2, name: 'wilma', age: 25},
//   {id: 3, name: 'barney', age: 27},
//   {id: 4, name: 'betty', age: 29},
// ]

// const personIdx = id => R.findIndex(R.propEq('id', id), people)
// const ageLens = idx => R.lensPath([idx, 'age'])

// const wLens = ageLens(personIdx(1))

// const newPeople = R.over(wLens, age => age + 1, people)

// newPeople

// const array = [1, 2, 4]
// const collection = [{ id: 1, eyes: 'blue'},{ id: 1, eyes: 'margot'},{ id: 2, eyes: 'brown'}, { id: 3, eyes: 'green'}, { id: 4, eyes: 'blue'}]

// const joinById = R.pipe(
//   R.propEq,
//   R.flip,
//   R.innerJoin
// )('id')

// const result = joinById(collection, array)

// R.map(R.over(R.lensProp('id'), R.replace(/child/g, 'Ben')))(children)

// const lookup = R.flip(R.prop);
// // usage:
// const cache = lookup({ a: 1, b: 2, c: 3 });
// cache('a')
// // -> 1

/////#########################################################################
// const denormalize = steps => store =>
//   steps.reduce(
//     (s, { key, foreignKey, target, targetId, newKey }) => ({
//       ...s,
//       [key]: s[key].map(t => ({
//         ...t,
//         [newKey]: s[target].find(x => x[targetId] === t[foreignKey])
//       }))
//     }),
//     store
//   );

// // const updateStore = denormalize([
// //   ['teams', 'regionId', 'regions', 'id', 'region'],
// //   ['users', 'teamId', 'teams', 'id', 'team']
// // ]);
// const config = [
//   {
//     key: 'children',
//     foreignKey: 'id',
//     target: 'needs',
//     targetId: 'id',
//     newKey: 'needs'
//   }
// ];
// const updateStore = denormalize(config);

// // const store = {users: [{childId: "team-1", name: "user 1"}, {childId: "team-2", name: "user 2"}], teams: [{id: "team-1", regionId: "region-1", name: "Team 1"}, {id: "team-2", regionId: "region-2", name: "Team 2"}], regions: [{id: "region-1", name: "Region 1"}, {id: "region-2", name: "Region 2"}]}
// const store = {
//   children: [{ id: 'child1' }, { id: 'child2' }],
//   needs: [{ id: 'child1' }, { id: 'child1' }, { id: 'child2' }]
// };

// R.innerJoin((record, id) => record.belongsTo === id, needs, [
//   'child1',
//   'child2',
//   'child3'
// ]);
