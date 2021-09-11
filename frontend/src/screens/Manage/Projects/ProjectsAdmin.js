import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { projectList } from '../Projects/ProjectActions';

const ProjectsAdmin = ({ projectList}) => {
   const [projects, setProjects] = useState([]);

    useEffect(()=>{
        exibir()
     }, []);

    async function exibir() {
        const { payload } = await projectList();
        setProjects(payload.data.data)
    } 

    // useEffect(()=>{
    //     articlesList()
    //  }, [articlesList]);

    return(
        <div id="conteudo">
            <div>
                <div class="titulo1">
                    <div class="row">
                        <div class="column">Gerenciamento dos projetos</div>
                        <div class="column">
                            <Link class="link link--metis" to="/Manage/Projects/create">Criar um projeto</Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            

            {projects && projects.length 
            ? projects.map( (project) => {
                // console.log(article)
                return (
                    <div key={project.project_id}>
                        <section>
                        <article>
                            <div class="titulo1">{project.title}</div>
                            <div>{project.description}</div>
                            <div>Integrantes: {project.members}</div>
                            <div>Financiador(es): {project.financiers}</div>
                        </article>
                        <p>
                            <Link to={`/Manage/Projects/edit/${project.project_id}`} class="link link--eirene">
                                Editar este projeto
                            </Link>
                        </p>
                    </section>
                    </div>
            );
        }) : null}
            
        
         


        </div>
        
    );
};

const mapStateToProps = (state) => {
    return { projects: state.projects };
};

export default connect(mapStateToProps, {projectList})(ProjectsAdmin);