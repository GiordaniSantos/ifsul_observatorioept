const express = require('express');
const { SearchGroup } = require('../models');

const router = express.Router();

router.get('/', async (req, res) =>{
    const searchGroup = await SearchGroup.findAll();
    return res.jsonOK(searchGroup);
});

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const searchGroup  = await SearchGroup.findOne({where: {SearchGroup_id:id}});
    if(!searchGroup) return res.jsonNotFound();
    return res.jsonOK(searchGroup);
});

router.post('/', async (req, res) => {

    const {tittle, linked_researchers} = req.body;

    const searchGroup = await SearchGroup.create({tittle, linked_researchers})

    return res.jsonOK(searchGroup);
 });

 router.put('/:id', async (req, res) =>{
    const { id } = req.params;

    const { body } = req;
    const fields = ['tittle', 'linked_researchers'];

    const searchGroup  = await SearchGroup.findOne({where: {SearchGroup_id:id}});
    if(!searchGroup) return res.jsonNotFound();
    
    fields.map(fieldName=>{
        const newValue = body[fieldName];
        if(newValue!=undefined) searchGroup[fieldName] = newValue
    });

    await searchGroup.save();

    return res.jsonOK(searchGroup);
});

router.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    const searchGroup  = await SearchGroup.findOne({where: {SearchGroup_id:id}});
    if(!searchGroup) return res.jsonNotFound();
    await searchGroup.destroy();
    return res.jsonOK();
});

 module.exports = router;