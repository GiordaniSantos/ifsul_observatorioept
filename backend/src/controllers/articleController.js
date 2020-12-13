const express = require('express');
const { Article } = require('../models');

const router = express.Router();

router.get('/', async (req, res) =>{
    const article = await Article.findAll();
    return res.jsonOK(article);
});

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const article  = await Article.findOne({where: {articleId:id}});
    if(!article) return res.jsonNotFound();
    return res.jsonOK(article);
});

router.post('/', async (req, res) => {

    const {authors, title, year, dissemination_vehicle, access_link} = req.body;

    const article = await Article.create({authors, title, year, dissemination_vehicle, access_link})

    return res.jsonOK(article);
 });

router.put('/:id', async (req, res) =>{
    const { id } = req.params;

    const { body } = req;
    const fields = ['authors', 'title', 'year', 'dissemination_vehicle', 'access_link'];

    const article  = await Article.findOne({where: {articleId:id}});
    if(!article) return res.jsonNotFound();
    
    fields.map(fieldName=>{
        const newValue = body[fieldName];
        if(newValue!=undefined) article[fieldName] = newValue
    });

    await article.save();

    return res.jsonOK(article);
});

router.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    const article  = await Article.findOne({where: {articleId:id}});
    if(!article) return res.jsonNotFound();
    await article.destroy();
    return res.jsonOK();
});


 module.exports = router;