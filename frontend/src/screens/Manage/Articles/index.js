import React, { useEffect, useState } from 'react';
import { articlesList } from '../../Manage/Articles/ArticlesActions'; 

const Articles = ( ) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        async function exibir() {
            const { payload } = articlesList();

            setArticles((await payload).data.data)

            console.log( (await payload).data.data);
        } 
        exibir()
     }, []);

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
                                <a class="link link--dia" rel="noreferrer" target="_blank" href={article.access_link}>Acessar a publicação</a>
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

export default Articles;