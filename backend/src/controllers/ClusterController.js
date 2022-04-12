//get agrupamento, listar curriculos, a partir de um curriculo listrar projetos e artigos

const express = require('express');
const { Curriculum } = require('../models');
const { Project, Article } = require('../models');
const { Op } = require("sequelize");

const router = express.Router();

/*router.get('/', async (req, res) =>{
    const curriculum = await Curriculum.findAll();
    return res.jsonOK(curriculum);
});

router.get('/:id', async (req, res)=>{
    const { id } = req.params;
    const curriculum  = await Curriculum.findOne({where: {curriculum_id:id}});
    if(!curriculum) return res.jsonNotFound();
    return res.jsonOK(curriculum);
});
*/
router.get('/teste/pesquisar', async (req, res) =>{

    // TODO melhorar a segurança do 'termo'

    const query = req.query.termo;

    var listaPesquisadores=[];

    let pesquisadorPeso = {};

let countAuxProject=1;
let countAuxArticle=1;
let pesoProject =0;
let pesoArticle =0;
let pesoPesquisador = 0;
 
    const curriculum = await Curriculum.findAll({ 
        include: [
            {
                model: Article
            },
              {  
                 model: Project
                 },
                ]
            })

   curriculum.map(function(curriculo){
    console.log("cada curriculo: "+curriculo.curriculum_id)
    if(curriculo.Projects.length != 0){
        // console.log("curriculo possui projects")
        for(let x=0; x<=(curriculo.Projects.length)-1; x++){
            // console.log("entrando no for do project")
            // console.log("for project count aux: "+countAuxProject)
            // console.log("for project peso project:" +pesoProject)
            if(curriculo.Projects[x].title.includes('Projeto')){
                //console.log("possui"+ curriculo.Projects[x].title)
                console.log("indice do for de projetos: "+x)
                //console.log(countAuxProject)
                
                pesoProject=countAuxProject + x;
               // console.log(pesoProject)
                
                
             //   console.log("peso projeto " + pesoProject)
            } else {
                
                pesoProject=0;
            }

        }
    }

    if(curriculo.Articles.length != 0){
       // console.log("curriculo possui articles")
        for(let x=0; x<=(curriculo.Articles.length)-1; x++){
            
            //console.log("entrando no for do article")
            //console.log("for article count aux: "+countAuxArticle)
            //console.log("for article peso article: ",pesoArticle)
            if(curriculo.Articles[x].title.includes('Projeto')){
                console.log("indice do for de artigos: "+x)
                //console.log("possui")
             //  countAuxArticle++;
             pesoArticle=countAuxArticle+ x;
            
               
                //console.log("peso artigo "+ pesoArticle)
            }else {
           
                pesoArticle=0;
            }

        }
    }
    console.log("peso artigos: "+pesoArticle)
    console.log("peso projetos: "+pesoProject)
    pesoPesquisador = pesoProject + pesoArticle;
    if(pesoPesquisador!=0){

        console.log("esse pesquisador tem peso: "+pesoPesquisador)
        pesquisadorPeso = {'nomePesquisador: ': curriculo.name, "pesoPesquisador:":pesoPesquisador}
        listaPesquisadores.push(pesquisadorPeso)
        console.log(listaPesquisadores)
        pesoPesquisador = 0;
        pesoProject= 0;
        pesoArticle = 0;
    }
})


listaPesquisadores.sort(function(a,b){
    return a.pesoPesquisador > b.pesoPesquisador;
})
//console.log(listaPesquisadores)

    JSON.stringify(listaPesquisadores)


  //  console.log(JSON.stringify(curriculum, null, 1));
    return res.jsonOK(listaPesquisadores);
});


/*router.post('/', async (req, res) => {

  //  const userId = req.id;
  

    const {name, idade, ensino_fundamental, ensino_medio, ensino_superior, rua, cep, bairro, cidade, estado, atuacao_profissional, area_atuacao, userId} = req.body;

    const curriculum = await Curriculum.create({name, idade, ensino_fundamental, ensino_medio, ensino_superior, rua, cep, bairro, cidade, estado, atuacao_profissional, area_atuacao, userId})

    return res.jsonOK(curriculum);
 });
*/

/*
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
*/

 module.exports = router;