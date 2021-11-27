import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import FormGroup from '../../../components/FormGroup';
import {getFormData} from '../../../helpers/form';
import { projectGet, projectUpdate } from './ProjectActions';

const ProjectEdit = ({project, projectGet, projectUpdate})=> {
 const { id } = useParams();

 useEffect(()=>{
    projectGet(id);
 }, [id, projectGet])

 const submitHandler = (e)=>{
    e.preventDefault();
    const data = getFormData(e)
    projectUpdate(id, data);

 };

    return(
        <div id="conteudo" class="boxsimples">
            <div class="titulo1">Editar as informações do projeto</div>
            <div>
                <form onSubmit={submitHandler}>
                    <FormGroup label="Título" name="title" data={project} type="text" />
                    <FormGroup label="Descrição" name="description" data={project} type="text" />
                    <FormGroup label="Membros" name="members" data={project} type="text" />
                    <FormGroup label="Financiadores" name="financiers" data={project} type="text" />
                    
                    
                    <input type="submit" value="Salvar as alterações no projeto" />
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        project: state.project.project,
    }
};

export default connect(mapStateToProps, { projectGet, projectUpdate }) (ProjectEdit);
