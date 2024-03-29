import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import FormGroup from '../../../components/FormGroup';
import {getFormData} from '../../../helpers/form';
import { articleGet, articleUpdate } from './ArticlesActions';

const ArticleEdit = ({article, articleGet, articleUpdate})=> {
    const { id } = useParams();

    useEffect(()=>{
        articleGet(id);
    }, [id, articleGet])

    const submitHandler = (e)=>{
        e.preventDefault();
        const data = getFormData(e)
        articleUpdate(id, data);
    };

    return(
        <div id="conteudo" class="boxsimples">
            <div class="titulo1">Editar artigo</div>
            <div>
                <form onSubmit={submitHandler}>
                    <FormGroup label="Autor" name="authors" data={article} type="text" />
                    <FormGroup label="Título" name="title" data={article} type="text" />
                    <FormGroup label="Ano" name="year" data={article} type="text" />
                    <FormGroup label="Nome do veículo" name="dissemination_vehicle" data={article} type="text" />
                    <FormGroup label="Link de acesso" name="access_link" data={article} type="text" />

                    <div>
                        <input type="submit" value="Salvar alterações" />
                    </div>
                </form>
                <div>
                    <Link to='/Manage/Articles/ArticlesAdmin'><button>Voltar</button></Link>
                </div>
            </div>
        </div>
       
    );
}

const mapStateToProps = (state) => {
    return {
        article: state.article.article,
    }
};

export default connect(mapStateToProps, { articleGet, articleUpdate }) (ArticleEdit);
