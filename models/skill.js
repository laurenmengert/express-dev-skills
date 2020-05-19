const skills = [
    {id: 125223, skill: 'CSS'},
    {id: 127904, skill: 'JavaScript'},
    {id: 139608, skill: 'HTML'},
    {id: 082212, skill: 'node'},
    {id: 870501, skill: 'Python'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}