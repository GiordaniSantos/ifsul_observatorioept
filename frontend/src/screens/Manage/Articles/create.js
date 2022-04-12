import React from 'react';
import { getFormData } from '../../../helpers/form';
import { articlesCreate } from './ArticlesActions';
import { connect } from 'react-redux';


const ArticleCreate = ( props)=> {
    const { account, curriculum } = props;

    console.log(curriculum)
    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e); 
        articlesCreate(data)
    }

    

    return(
        <div id="conteudo" class="boxsimples">
            <div class="titulo1">Cadastrar novo artigo</div>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="">
                        <label>Autores(as)</label>
                        <input type="text" name="authors" />
                    </div>
                    <div className="">
                        <label>Título</label>
                        <input type="text" name="title" />
                    </div>
                    <div className="">
                        <label>Ano</label>
                        <input type="text" name="year" />
                    </div>
                    <div className="">
                        <label>Nome do veículo</label>
                        <input type="text" name="dissemination_vehicle" />
                    </div>
                    <div className="">
                        <label>Link de acesso</label>
                        <input type="text" name="access_link" />
                    </div>
                    <label>id do usuario/curriculo</label>
                    <input type="text" name="curriculumId" value={account.user_id} />

                    <div>
                        <input type="submit" value="Cadastrar artigo" />
                    </div>
                </form>
                
            </div>
        </div>
       
    );
}

const mapStateToProps = (state) => {
    return { article: state.article, 
        account: state.signIn.account,
    curriculum: state.curriculum  };
}; 

export default connect(mapStateToProps, {articlesCreate})(ArticleCreate);
