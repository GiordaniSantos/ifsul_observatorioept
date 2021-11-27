import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newsList } from '../../Manage/News/NewsActions'; 

const NewsAdmin = ({newsList}) => {


    const [news, setNews] = useState([]);

    useEffect(()=>{

        async function exibir() {
            const { payload } = await newsList();
            setNews(payload.data.data)
        } 

        exibir()

     });

    

    // useEffect(()=>{
    //     articlesList()
    //  }, [articlesList]);



 //   useEffect(()=>{
 //      newsList();
 //   }, [newsList]);
    
    
    return(
        <div id="conteudo">
            <div class="titulo1">
                <div class="row">
                    <div class="column">Gerenciamento das notícias</div>
                    <div class="column">
                    
                        <Link class="link link--metis" to="/Manage/News/create">Cadastrar uma notícia</Link>
                    </div>
                </div>
            </div>     
        
            {news && news.length 
            ? news.map( (newww) => {
                
                return (
                    <div key={newww.news_id}>
                        <section>
                            <article>
                                <div class="titulo1">{newww.title}</div>
                                <div>{newww.description}</div>
                            </article>
                            <p><Link class="link link--eirene" to={`/Manage/News/edit/${newww.news_id}`}>Editar</Link></p>
                        </section>
                    </div>
            );
        }) : null}

        </div>
        
    );
};

const mapStateToProps = (state) => {
    return {news: state.news};
}

export default connect(mapStateToProps, {newsList})(NewsAdmin);