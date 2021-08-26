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
        <div>
            <div>
                <h1>Projetos</h1>
            </div>

            {projects && projects.length 
            ? projects.map( (project) => {
                // console.log(article)
                return (
                <div key={project.project_id}>
                    <section>
                        <article>
                        <h2>{project.title}</h2>
                            <div>
                        <p>{project.description}</p>
                            </div>
                <h5>Integrantes: {project.members}</h5>
                <h5>Financiador(es): {project.financiers}</h5>

                        </article>
                            <Link to={`/Manage/Projects/edit/${project.project_id}`}>
                                Editar um projeto
                             </Link>
                    </section>
                </div>
            );
        }) : null}
            
        
            
         <div>
                <Link to="/Manage/Projects/create">
                    Criar um projeto
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
    return { projects: state.projects };
};

export default connect(mapStateToProps, {projectList})(ProjectsAdmin);