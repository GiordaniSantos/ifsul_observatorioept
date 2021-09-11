import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { articlesList } from '../../Manage/Articles/ArticlesActions'; 

const Articles = ({ articlesList}) => {
   const [articles, setArticles] = useState([]);

    useEffect(()=>{
        exibir()
     }, []);

    async function exibir() {
        const { payload } = await articlesList();
        setArticles(payload.data.data)
    } 

    // useEffect(()=>{
    //     articlesList()
    //  }, [articlesList]);

    return(
        <div id="conteudo">
            
            {articles && articles.length 
            ? articles.map( (article) => {
                // console.log(article)
                return (
                <div key={article.article_id}>
                    <section>
                        <article>
                            <div class="titulo1">{article.title}</div>
                            <div class="artigo-autores">
                                {article.authors} <br/>
                                {article.dissemination_vehicle} ({article.year}) <br/>
                            </div>
                            <div class="artigo-link">
                                <a class="link link--dia" target="_blank" href={article.access_link}>Acessar a publicação</a>
                            </div>
                            <div class="artigo-serparador"></div>
                        </article>
                    </section>
                </div>
            );
        }) : null}
            
        
            
        </div>
        
    );
};

const mapStateToProps = (state) => {
    return { articles: state.articles };
};

export default connect(mapStateToProps, {articlesList})(Articles);