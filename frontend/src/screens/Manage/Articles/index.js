import React, { useEffect, useState } from 'react';
import { apiGet } from '../../../helpers/api';
import { articlesList } from '../../Manage/Articles/ArticlesActions'; 

const Articles = ( ) => {
    const [articles, setArticles] = useState([]);

    useEffect(()=>{
        async function exibir() {
            const { payload } = articlesList();
            setArticles((await payload).data.data)
        } 
        exibir()
     }, []);

     const onChangeHandler = async e => {
        // e.target.value ---> pega o conteudo da caixa de texto que gerou o evento onChangeHandler
        const payload = apiGet('/article/s/pesquisar?termo=' + e.target.value);
        setArticles((await payload).data.data)
    }

    return(
        <div id="conteudo">
            
            <div class="column column_right search">
                    <input 
                        type="text"
                        onChange={e => onChangeHandler(e)}
                        placeholder="Pesquise pelo titulo..."
                    />
            </div>

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