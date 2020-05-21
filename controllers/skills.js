const skillsDB = require('../models/skill');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
}

function index(req, res, next) {
    res.render('skills/index', {
        skills: skillsDB.getAll()
    })
}

function show(req, res, next) {
    res.render('skills/show', {
        skill: skillsDB.getOne(req.params.id)
    })
}

function newSkill(req, res) {
    res.render('skills/new.ejs');
}

function create(req, res) {
    skillsDB.create(req.body);
    res.redirect('/skills');
}

function deleteSkill(req, res) {
    skillsDB.deleteOne(req.params.id);
    res.redirect('/skills');
}

function edit(req, res) {
    const skill = skillsDB.getOne(req.params.id);
    res.render('skills/edit', {skill});
}

function update(req, res) {
    req.body.expert = !!req.body.expert;
    skillsDB.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}