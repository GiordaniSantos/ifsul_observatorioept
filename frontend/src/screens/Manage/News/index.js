import React from 'react';
import { Link } from 'react-router-dom';


const News = () => {
    return(
        <div>
            <div>
                <h1>Noticias</h1>
            </div>
            <div>
                <Link to="/Manage/News/create">
                    Criar Noticias
                </Link>
            </div>
        </div>
    );
};

export default News;