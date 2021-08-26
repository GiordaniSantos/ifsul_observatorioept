import React from 'react';
import { getFormData } from '../../../helpers/form';
import { Link } from 'react-router-dom';
import { projectCreate } from './ProjectActions';
import { connect } from 'react-redux';



const CreateProject = ()=> {

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);   
        projectCreate(data)
    }

    

    return(
        <div className="">
        <h1>Crie um projeto</h1>
        <div>
            <form onSubmit={submitHandler}>
                <div className="">
                    <label>Titulo</label>
                    <input type="text" name="title" />
                </div>
                <div className="">
                    <label for="descricao">Descrição</label>
                    <textarea id="descricao" name="description" rows="5" cols="33"></textarea>
                </div>
                <div className="">
                    <label>Membros</label>
                    <input type="text" name="members" />
                </div>
                <div className="">
                    <label>Financiadores</label>
                    <input type="text" name="financiers" />
                </div>
                <div>
                    <button>Enviar noticia</button>
                </div>
            </form>
            <div>
                <Link to='/Manage/Projects/ProjectsAdmin'><button>Cancelar</button></Link>
            </div>
        </div>
    </div>
       
    );
}

const mapStateToProps = (state) => {
    return { project: state.project };
};


export default connect(mapStateToProps, {projectCreate})(CreateProject);
