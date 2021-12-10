import React from 'react';
import { getFormData } from '../../../helpers/form';
import { newsCreate } from './NewsActions';
import { connect } from 'react-redux';
import { Form } from '@unform/web';
import Input from '../../../components/Form/input';

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
                <Form onSubmit={submitHandler}>
                    <label for="authors">Autor(a)</label>
                    <Input type="text" name="authors" />
                                        
                    <label>Título</label>
                    <Input type="text" name="title" />
                                        
                    <label for="descricao">Descrição</label>
                    <Input type="text" id="descricao" name="description" />
                    
                    <Input type="submit" name="submit" value="Cadastrar a notícia" />
                    
                </Form>
            </div>
        </div>
       
    );
}

const mapStateToProps = (state) => {
    return { neww: state.neww };
};


export default connect(mapStateToProps, {newsCreate})(CreateNew);
