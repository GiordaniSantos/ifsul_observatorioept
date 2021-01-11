const express = require('express');
const { Schedule } = require('../models');
const router = express.Router();

router.get('/', async (req, res) =>{
    const schedule = await Schedule.findAll();
    return res.jsonOK(schedule);
});

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const schedule  = await Schedule.findOne({where: {schedule_id:id}});
    if(!schedule) return res.jsonNotFound();
    return res.jsonOK(schedule);
});

router.post('/',  async (req, res) =>{
    const {date, description, external_link} = req.body;

    const schedule = await Schedule.create({date, description, external_link})

    return res.jsonOK(schedule);
});

router.put('/:id', async (req, res) =>{
    
    const { id } = req.params;

    const { body } = req;
    const fields = ['date', 'description', 'external_link'];

    const schedule  = await Schedule.findOne({where: {schedule_id:id}});
    if(!schedule) return res.jsonNotFound();
    
    fields.map(fieldName=>{
        const newValue = body[fieldName];
        if(newValue!=undefined) schedule[fieldName] = newValue
    });

    await schedule.save();


    return res.jsonOK(schedule);
});

router.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    const schedule  = await Schedule.findOne({where: {schedule_id:id}});
    if(!schedule) return res.jsonNotFound();
    await schedule.destroy();
    return res.jsonOK();
});

module.exports = router;