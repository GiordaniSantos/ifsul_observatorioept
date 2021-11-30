const express = require('express');
const { Member } = require('../models');
const { Op } = require("sequelize");
const {generateJwt, generateRefreshJwt} = require('../helpers/jwt');
const router = express.Router();

router.get('/', async (req, res) =>{
    const members = 
        await Member.findAll( 
            {
                order: [  ['name', 'ASC'] ] 
            } 
        );
    return res.jsonOK(members);
});

// /members/pesqusiar?termo=abc
router.get('/pesquisar', async (req, res) =>{

    // TODO melhorar a segurança do 'termo'

    const query = req.query.termo;

    const members = 
        await Member.findAll( 
            {
                where: { name: { [Op.substring]: query } },
                order: [  ['name', 'ASC'] ] 
            } 
        );
    return res.jsonOK(members);
});

module.exports = router;