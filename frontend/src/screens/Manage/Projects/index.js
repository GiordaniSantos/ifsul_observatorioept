import React, { useEffect, useState } from 'react';
import { apiGet } from '../../../helpers/api';
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

    const onChangeHandler = async e => {
        // e.target.value ---> pega o conteudo da caixa de texto que gerou o evento onChangeHandler
        const payload = apiGet('/project/s/pesquisar?termo=' + e.target.value);
        setProjects((await payload).data.data)
    }

    return (
        <div id="conteudo">

            <div  class="column column_right search">
                    <input 
                        type="text"
                        onChange={e => onChangeHandler(e)}
                        placeholder="Pesquisar projeto..."
                    />
            </div>
     

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