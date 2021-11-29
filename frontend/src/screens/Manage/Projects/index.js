import React, { useEffect, useState } from 'react';
import { projectList } from '../Projects/ProjectActions';

const Project = () => {

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function exibir() {
            const { payload } = projectList();
            setProjects((await payload).data.data)
        }
        exibir()
    }, []);

    return (
        <div id="conteudo">
            {projects && projects.length
                ? projects.map((project) => {
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

export default Project;