import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
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
        <div className="">
        <h1>Editar noticia</h1>
        <div>
            <form onSubmit={submitHandler}>
            <FormGroup label="Titulo" name="title" data={project} type="text" />
            <FormGroup label="Descrição" name="description" data={project} type="text" />
            <FormGroup label="Membros" name="members" data={project} type="text" />
            <FormGroup label="Financiadores" name="financiers" data={project} type="text" />
            
                <div>
                    <button>Editar noticia</button>
                </div>
            </form>
            <div>
                <Link to='/Manage/Projects/ProjectsAdmin'><button>Voltar</button></Link>
            </div>
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
