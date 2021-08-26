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
        <div>
            <div>
                <h1>Artigos</h1>
            </div>

            {articles && articles.length 
            ? articles.map( (article) => {
                // console.log(article)
                return (
                <div key={article.article_id}>
                    <section>
                        <article>
                        <h3>{article.title}</h3>
                            <div>
                                Autores: {article.authors} <br/>
                                {article.dissemination_vehicle} ({article.year}) <br/>
                                <a class="read-more" href={article.access_link}>Link da publicação</a>
                            </div>
                        </article>
                        <div>
                        <Link to={`/Manage/Articles/edit/${article.article_id}`}>
                            Editar Artigo
                        </Link>
                        </div>
                    </section>
                    
                </div>
            );
        }) : null}
            
        
            <br></br>
         <div>
                <Link to="/Manage/Articles/create">
                    Criar Artigo
                </Link>
            </div>

            <br/>
            <div>
                <Link to='/management'><button>Voltar</button></Link>
            </div>

        </div>
        
        
    );
};

const mapStateToProps = (state) => {
    return { articles: state.articles };
};

export default connect(mapStateToProps, {articlesList})(ArticlesAdmin);