// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Management = () => {
    return(
        <div id="conteudo" class="boxsimples">
            <div class="titulo1">Administração</div>
            <div>
                <ul>
                    <li><Link class="link link--metis" to="/Manage/News/NewsAdmin">Notícias</Link></li>
                    <li><Link class="link link--metis" to="/Manage/Articles/ArticlesAdmin">Artigos</Link></li>
                    <li><Link class="link link--metis" to="/Manage/Projects/ProjectsAdmin">Projetos</Link></li>
                    <li><Link class="link link--metis" to="/Manage/Schedule/SchedulesAdmin">Agenda</Link></li>
                </ul>
            </div>
        </div>
       
    );
};

export default Management;