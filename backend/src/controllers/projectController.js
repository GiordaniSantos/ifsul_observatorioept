const express = require('express');
const { Project } = require('../models');

const router = express.Router();

router.get('/', async (req, res) =>{
    const project = await Project.findAll();
    return res.jsonOK(project);
});

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const project  = await Project.findOne({where: {project_id:id}});
    if(!project) return res.jsonNotFound();
    return res.jsonOK(project);
});

router.post('/', async(req, res) =>{
    const {title, description, members, financiers} = req.body;

    const project = await Project.create({title, description, members, financiers})

    return res.jsonOK(project);
});

router.put('/:id', async (req, res) =>{
    const { id } = req.params;

    const { body } = req;
    const fields = ['title', 'description', 'members', 'financiers'];

    const project  = await Project.findOne({where: {project_id:id}});
    if(!project) return res.jsonNotFound();
    
    fields.map(fieldName=>{
        const newValue = body[fieldName];
        if(newValue!=undefined) project[fieldName] = newValue
    });

    await project.save();

    return res.jsonOK(project);
});

router.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    const project  = await Project.findOne({where: {project_id:id}});
    if(!project) return res.jsonNotFound();
    await project.destroy();
    return res.jsonOK();
});

module.exports = router;