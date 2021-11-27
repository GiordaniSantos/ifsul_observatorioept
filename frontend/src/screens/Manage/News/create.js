import React from 'react';
import { getFormData } from '../../../helpers/form';
import { newsCreate } from './NewsActions';
import { connect } from 'react-redux';

const CreateNew = ()=> {

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);   
       newsCreate(data)
    }

    return(
        <div id="conteudo" class="boxsimples">
            <div class="titulo1">Crie uma notícia</div>
            <div>
                <form onSubmit={submitHandler}>
                    <label for="authors">Autor(a)</label>
                    <input type="text" name="authors" />
                                        
                    <label>Título</label>
                    <input type="text" name="title" />
                                        
                    <label for="descricao">Descrição</label>
                    <textarea id="descricao" name="description" rows="5" cols="33"></textarea>
                    
                    <input type="submit" value="Cadastrar a notícia" />
                    
                </form>
            </div>
        </div>
       
    );
}

const mapStateToProps = (state) => {
    return { neww: state.neww };
};


export default connect(mapStateToProps, {newsCreate})(CreateNew);
