import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Management = () => {
    return(
        <div>
            <div>
                <h1>Administração</h1>
            </div>
        
            <h2>Selecione o tipo de conteúdo que deseja criar, alterar ou deletar.</h2>
            
         <div>
                <Link to="/Manage/News/NewsAdmin">
                    Noticia
                </Link>
                <br></br>
                <br></br>
                <Link to="/Manage/Articles/ArticlesAdmin">
                    Artigos
                </Link>
                <br></br>
                <br></br>
                <Link to="/Manage/Projects/ProjectsAdmin">
                    Projetos
                </Link>
                <br></br>
                <br></br>
                <Link to="/Manage/Schedule/SchedulesAdmin">
                    Agenda
                </Link>
            </div>
        </div>
        
    );
};

export default Management;