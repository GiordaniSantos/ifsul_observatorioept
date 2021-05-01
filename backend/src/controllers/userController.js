const express = require('express');
const { User } = require('../models');
//const {generateJwt, generateRefreshJwt} = require('../helpers/jwt');

const router = express.Router();

router.get('/', async (req, res) =>{
    const user = await User.findAll();
    return res.jsonOK(user);
});

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const user  = await User.findOne({where: {User_id:id}});
    if(!user) return res.jsonNotFound();
    return res.jsonOK(user);
});

router.post('/', async (req, res) => {

    const {user_type, name, email, password, formation, curriculum, associated_institution, link_curriculum} = req.body;

    const user = await User.create({user_type, name, email, password, formation, curriculum, associated_institution, link_curriculum})

    return res.jsonOK(user);
 });

router.put('/:id', async (req, res) =>{
    const { id } = req.params;

    const { body } = req;
    const fields = ['user_type', 'name', 'email', 'password', 'formation', 'curriculum', 'associated_institution', 'link_curriculum'];

    const user  = await User.findOne({where: {User_id:id}});
    if(!user) return res.jsonNotFound();
    
    fields.map(fieldName=>{
        const newValue = body[fieldName];
        if(newValue!=undefined) user[fieldName] = newValue
    });

    await user.save();

    return res.jsonOK(user);
});

router.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    const user  = await User.findOne({where: {User_id:id}});
    if(!user) return res.jsonNotFound();
    await user.destroy();
    return res.jsonOK();
});


 module.exports = router;