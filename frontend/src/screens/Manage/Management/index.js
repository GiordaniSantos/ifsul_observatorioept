// import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Management = (props) => {
    const { account } = props;

    return(
        <div id="conteudo" class="boxsimples">
            <div class="titulo1">Administração</div>
            <div>
                <ul>
                    <li><Link class="link link--metis" to="/Manage/News/NewsAdmin">Notícias</Link></li>
                    <li><Link class="link link--metis" to="/Manage/Articles/ArticlesAdmin">Artigos</Link></li>
                    <li><Link class="link link--metis" to="/Manage/Projects/ProjectsAdmin">Projetos</Link></li>
                    <li><Link class="link link--metis" to="/Manage/Schedule/SchedulesAdmin">Agenda</Link></li>
                    <li><Link class="link link--metis" to="/Manage/Management/MambersAdmin">Membros</Link></li>
                    <li><Link class="link link--metis" to="/Manage/Curriculum/create">Curriculo</Link></li>
                    <li><Link class="link link--metis" to={`/Manage/Curriculum/edit/${account.user_id}`}>Editar Curriculo</Link></li>
                    <li><Link class="link link--metis" to="/cluster">Agrupar</Link></li>
                </ul>
            </div>
        </div>
       
    );
};

const mapStateToProps = (state) => {
    return { account: state.signIn.account}
};


export default connect(mapStateToProps)(Management);

//export default Management;