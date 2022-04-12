const express = require('express');
const { Curriculum } = require('../models');
const { Op } = require("sequelize");

const router = express.Router();

router.get('/', async (req, res) =>{
    const curriculum = await Curriculum.findAll();
    return res.jsonOK(curriculum);
});

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const curriculum  = await Curriculum.findOne({where: {curriculum_id:id}});
    if(!curriculum) return res.jsonNotFound();
    return res.jsonOK(curriculum);
});

/*router.get('/s/pesquisar', async (req, res) =>{

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
*/

router.post('/', async (req, res) => {

  //  const userId = req.id;
  

    const {name, idade, ensino_fundamental, ensino_medio, ensino_superior, rua, cep, bairro, cidade, estado, atuacao_profissional, area_atuacao, userId} = req.body;

    const curriculum = await Curriculum.create({name, idade, ensino_fundamental, ensino_medio, ensino_superior, rua, cep, bairro, cidade, estado, atuacao_profissional, area_atuacao, userId})

    return res.jsonOK(curriculum);
 });

 router.put('/:id', async (req, res) =>{
    const { id } = req.params;

    const { body } = req;
    const fields = ['name', 'idade', 'ensino_fundamental', 'ensino_medio', 'ensino_superior', 'rua', 'cep', 'bairro', 'cidade', 'estado', 'atuacao_profissional', 'area_atuacao'];

    const curriculum  = await Curriculum.findOne({where: {curriculum_id:id}});
    if(!curriculum) return res.jsonNotFound();
    
    fields.map(fieldName=>{
        const newValue = body[fieldName];
        if(newValue!=undefined) curriculum[fieldName] = newValue
    });

    await curriculum.save();

    return res.jsonOK(curriculum);
});

router.delete('/:id', async (req, res) =>{
    const { id } = req.params;
    const curriculum  = await Curriculum.findOne({where: {curriculum_id:id}});
    if(!curriculum) return res.jsonNotFound();
    await curriculum.destroy();
    return res.jsonOK();
});

 module.exports = router;