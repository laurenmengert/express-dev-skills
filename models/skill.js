const skills = [
    {id: 125223, skill: 'CSS', expert: false},
    {id: 127904, skill: 'JavaScript', expert: false},
    {id: 286468, skill: 'Dancing', expert: true},
    {id: 139608, skill: 'HTML', expert: false},
    {id: 632686, skill: 'Special FX Makeup', expert: true},
    {id: 082212, skill: 'Node', expert: false},
    {id: 870501, skill: 'Python', expert: false},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};

function getAll() {
    return skills;
}

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    skill.expert = false;
    skills.push(skill);
}

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}

function update(id, skill) {
    const skillObj = skills.find(skill => skill.id === parseInt(id));
    Object.assign(skillObj, skill);
}