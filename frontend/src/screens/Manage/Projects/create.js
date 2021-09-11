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
        <div id="conteudo" class="boxsimples">
            <div class="titulo1">Crie um projeto</div>
            <div>
                <form onSubmit={submitHandler}>
                    <label>Título</label>
                    <input type="text" name="title" />
                    
                    <label for="descricao">Descrição</label>
                    <textarea id="descricao" name="description" rows="5" cols="33"></textarea>
                    
                    <label>Membros</label>
                    <input type="text" name="members" />
                    
                    <label>Financiadores</label>
                    <input type="text" name="financiers" />
                    
                    <input type="submit" value="Registrar este projeto" />
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { project: state.project };
};


export default connect(mapStateToProps, {projectCreate})(CreateProject);
