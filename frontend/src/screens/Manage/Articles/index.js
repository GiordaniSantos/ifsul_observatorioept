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
        <div  id="artigos">
            <div>
                
            </div>

            {articles && articles.length 
            ? articles.map( (article) => {
                // console.log(article)
                return (
                <div key={article.article_id}>
                    <section>
                        <article>
                            <div class="artigo-titulo">{article.title}</div>
                            <div>
                                {article.authors} <br/>
                                {article.dissemination_vehicle} ({article.year}) <br/>
                                <a class="read-more" target="_blank" href={article.access_link}>Link da publicação</a>
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