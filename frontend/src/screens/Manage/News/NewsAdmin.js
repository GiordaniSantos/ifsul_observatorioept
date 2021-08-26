import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { newsList } from '../../Manage/News/NewsActions'; 

const NewsAdmin = ({newsList}) => {


    const [news, setNews] = useState([]);

    useEffect(()=>{
        exibir()
     }, []);

    async function exibir() {
        const { payload } = await newsList();
        setNews(payload.data.data)
    } 

    // useEffect(()=>{
    //     articlesList()
    //  }, [articlesList]);



 //   useEffect(()=>{
 //      newsList();
 //   }, [newsList]);
    
    
    return(
        <div>
            <div>
                <h1>Noticias</h1>
            </div>        
        
            {news && news.length 
            ? news.map( (newww) => {
                
                return (
                    <div key={newww.news_id}>
                    <section>
                        <article>
                        <h3>{newww.title}</h3>
                            <div>
                <p>{newww.description}</p>
                            </div>
                        </article>
                    </section>
                    <Link to={`/Manage/News/edit/${newww.news_id}`}>
                    Editar
                    </Link>
                </div>
            );
        }) : null}

        <br></br>
         <div>
                <Link to="/Manage/News/create">
                    Criar Noticia
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
    return {news: state.news};
}

export default connect(mapStateToProps, {newsList})(NewsAdmin);