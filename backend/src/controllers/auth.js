const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../models');
const { userSignUp } = require('../validators/User')
const { getMessage } = require('../helpers/validator')

const router = express.Router();

const saltRounds = 10;

router.get('/sign-in', (req, res) => {
    return res.json('Sign-in');
});

router.get('/sign-up', userSignUp, async (req, res) => {

    const { name, email, password } = req.body;

    const user_type = 'discente';


    const account = await User.findOne({ where: { email }});

    if ( account ) return res.jsonBadRequest(null, getMessage('user.signup.email_exists'))

    const hash = bcrypt.hashSync(password, saltRounds);
    const newAccount = await User.create({ user_type, name, email, password: hash });

    return res.jsonOK(newAccount, getMessage('user.signup.sucess'));
});

module.exports = router;