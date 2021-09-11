import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { projectList } from '../Projects/ProjectActions';

const Project = ({ projectList}) => {
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
            
            {projects && projects.length 
            ? projects.map( (project) => {
                // console.log(article)
                return (
                <div key={project.project_id}>
                    <section>
                        <article>
                            <div class="titulo1">{project.title}</div>
                            <div><p>{project.description}</p></div>
                            <div><b>Integrantes: </b> {project.members}</div>
                            <div><b>Financiador(es): </b> {project.financiers}</div>
                            <div class="projeto-separador"></div>
                        </article>
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

export default connect(mapStateToProps, {projectList})(Project);