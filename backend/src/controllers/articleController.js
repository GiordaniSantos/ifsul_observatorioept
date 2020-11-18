const express = require('express');
const { Article } = require('../models');

const router = express.Router();

router.get('/articles', async (req, res) => {

    const { authors, title, year, dissemination_vehicle, access_link } = req.body;

     const newArticle = await Article.create({
     authors, 
     title,
     year,
     dissemination_vehicle,
     access_link
    });
    
     
     return res.jsonOK(newArticle);
     console.log();
 });

 module.exports = router;