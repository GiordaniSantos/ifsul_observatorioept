import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import FormGroup from '../../../components/FormGroup';
import { getFormData } from '../../../helpers/form';
import { newGet, newUpdate } from '../../Manage/News/NewsActions';

const NewEdit = ({ neww, newGet, newUpdate }) => {
    const { id } = useParams();

    useEffect(() => {
        newGet(id);
    }, [id, newGet])

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e)
        newUpdate(id, data);
    };

    return (
        <div id="conteudo" class="boxsimples">
            <div class="titulo1">Editar noticia</div>
            <div>
                <form onSubmit={submitHandler}>
                    <FormGroup label="Autor" name="authors" data={neww} type="text" />
                    <FormGroup label="Título" name="title" data={neww} type="text" />
                    <FormGroup label="Descrição" name="description" data={neww} type="textarea" />

                    <input type="submit" value="Editar noticia" />
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        neww: state.neww.neww,
    }
};

export default connect(mapStateToProps, { newGet, newUpdate })(NewEdit);
