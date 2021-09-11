import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { articlesList } from '../../Manage/Articles/ArticlesActions'; 

const ArticlesAdmin = ({ articlesList}) => {
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
            <div class="titulo1">
                <div class="row">
                    <div class="column">
                        Gerenciar os artigos
                    </div>
                    <div class="column">
                        <Link to="/Manage/Articles/create" class="link link--metis">
                            Cadastrar novo artigo
                        </Link>
                    </div>
                </div>
            </div>

            {articles && articles.length 
            ? articles.map( (article) => {
                // console.log(article)
                return (
                <div key={article.article_id}>
                    <section>
                        <article>
                        <div class="titulo1">{article.title}</div>
                            <div>
                                Autores: {article.authors} <br/>
                                {article.dissemination_vehicle} ({article.year}) <br/>
                                <a class="read-more" href={article.access_link}>Link da publicação</a>
                            </div>
                        </article>
                        <p>
                        <Link to={`/Manage/Articles/edit/${article.article_id}`} class="link link--eirene">
                            Editar Artigo
                        </Link>
                        </p>
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

export default connect(mapStateToProps, {articlesList})(ArticlesAdmin);