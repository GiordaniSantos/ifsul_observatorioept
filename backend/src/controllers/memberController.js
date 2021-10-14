const express = require('express');
const { Member } = require('../models');
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

module.exports = router;