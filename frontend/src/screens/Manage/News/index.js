import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { newsList } from '../../Manage/News/NewsActions'; 
import moment from 'moment';
import 'moment/locale/pt-br';

const News = ({newsList}) => {

    const [news, setNews] = useState([]);

    useEffect(()=>{
        async function exibir() {
            const { payload } = await newsList();
            setNews (payload.data.data )
        }
        exibir()
    }, [newsList]);

    // useEffect(()=>{
    //     articlesList()
    //  }, [articlesList]);

    //   useEffect(()=>{
    //      newsList();
    //   }, [newsList]);
    
    return(
        <div id="conteudo" class="container flex flex-wrap">
           
            {news && news.length 
            ? news.map( (newww) => {

                return (
                    <div key={newww.news_id} class="noticia-card">
                        <section >
                            <article >
                                <div class="titulo1">
                                    {newww.title}
                                </div>
                                <div class="noticia-data">{moment(newww.date).format('LL')}</div>
                                <div class="noticia-descricao">{newww.description.substr(0,300) + "..."}</div>
                                <div class="noticia-leiamais"><span class="link link--dia">Leia mais...</span></div>
                            </article>
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

export default connect(mapStateToProps, {newsList})(News);