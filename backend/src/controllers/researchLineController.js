const express = require('express');
const { ResearchLine } = require('../models');

const router = express.Router();

router.get('/', async (req, res) =>{
    const researchLine = await ResearchLine.findAll();
    return res.jsonOK(researchLine);
});

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const researchLine  = await ResearchLine.findOne({where: {ResearchLine_id:id}});
    if(!researchLine) return res.jsonNotFound();
    return res.jsonOK(researchLine);
});

router.post('/', async (req, res) => {

    const {name} = req.body;

    const researchLine = await ResearchLine.create({name})

    return res.jsonOK(researchLine);
 });

 router.put('/:id', async (req, res) =>{
    const { id } = req.params;

    const { body } = req;
    const fields = ['name'];

    const researchLine  = await ResearchLine.findOne({where: {ResearchLine_id:id}});
    if(!researchLine) return res.jsonNotFound();
    
    fields.map(fieldName=>{
        const newValue = body[fieldName];
        if(newValue!=undefined) researchLine[fieldName] = newValue
    });

    await researchLine.save();

    return res.jsonOK(researchLine);
});

router.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    const researchLine  = await ResearchLine.findOne({where: {ResearchLine_id:id}});
    if(!researchLine) return res.jsonNotFound();
    await researchLine.destroy();
    return res.jsonOK();
});

 module.exports = router;