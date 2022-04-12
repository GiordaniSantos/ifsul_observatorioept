const express = require('express');
const { News } = require('../models');
const { Op } = require("sequelize");

const router = express.Router();

router.get('/', async (req, res) =>{
    const news = await News.findAll();
    return res.jsonOK(news);
});

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const news  = await News.findOne({where: {news_id:id}});
    if(!news) return res.jsonNotFound();
    return res.jsonOK(news);
});

router.get('/s/pesquisar', async (req, res) =>{

    // TODO melhorar a segurança do 'termo'

    const query = req.query.termo;

    const news = 
        await News.findAll(
            {
            where: {title: { [Op.substring]: query }},
            order: [ ['title', 'ASC'] ]
            }
        );
    return res.jsonOK(news);
});

router.post('/', async (req, res) => {

    const {authors, title, description} = req.body;

    const news = await News.create({authors, title, description})

    return res.jsonOK(news);
 });

 router.put('/:id', async (req, res) =>{
    const { id } = req.params;

    const { body } = req;
    const fields = ['authors', 'title', 'description'];

    const news  = await News.findOne({where: {news_id:id}});
    if(!news) return res.jsonNotFound();
    
    fields.map(fieldName=>{
        const newValue = body[fieldName];
        if(newValue!=undefined) news[fieldName] = newValue
    });

    await news.save();

    return res.jsonOK(news);
});

router.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    const news  = await News.findOne({where: {news_id:id}});
    if(!news) return res.jsonNotFound();
    await news.destroy();
    return res.jsonOK();
});

 module.exports = router;