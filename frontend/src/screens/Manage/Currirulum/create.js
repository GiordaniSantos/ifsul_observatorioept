import React from 'react';
import { getFormData } from '../../../helpers/form';
import { curriculumCreate } from './CurriculumActions';
import FormGroup from '../../../components/FormGroup';
import { connect } from 'react-redux';

const CreateCurriculum = (props)=> {
    const { account} = props;
    console.log(account)

    const submitHandler = (e) => {
     //   e.preventDefault();
        const data = getFormData(e);   
       
        curriculumCreate(data)
       console.log(data)
    }

   

    return(
        <div id="conteudo" class="boxsimples">
            <div class="titulo1">Adicione ao seu curriculo</div>
            <div>
                <form onSubmit={submitHandler}>
                    <label for="name">Nome Completo</label>
                    <input type="text" name="name" />
                                        
                    <label>Idade</label>
                    <input type="text" name="idade" />
                                        
                    <label for="descricao">Instituição que frequentou ensino fundamental</label>
                    <input type="text" id="descricao" name="ensino_fundamental" rows="5" cols="33"/>

                    <label>Instituição que frequentou ensino medio</label>
                    <input type="text" name="ensino_medio" />

                    <label>Instituição que frequentou ensino superior</label>
                    <input type="text" name="ensino_superior" />

                    <label>Rua</label>
                    <input type="text" name="rua" />

                    <label>cep</label>
                    <input type="text" name="cep" />
                    
                    <label>Bairro</label>
                    <input type="text" name="bairro" />
                    
                    <label>Cidade</label>
                    <input type="text" name="cidade" />
                    
                    <label>Estado</label>
                    <input type="text" name="estado" />
                    
                    <label>Ocupação profissional atual</label>
                    <input type="text" name="atuacao_profissional" />
                    
                    <label>Área de atuação</label>
                    <input type="text" name="area_atuacao" />

                    <label>id do usuario</label>
                    <input type="text" name="userId" value={account.user_id} />

                  
                    
                    <input type="submit" name="submit" value="Adicionar ao curriculo" />
                    
                </form>
            </div>
        </div>
       // ['name', 'idade', 'ensino_fundamental', 'ensino_medio', 'ensino_superior', 'rua', 'cep', 'bairro', 'cidade', 'estado', 'atuacao_profissional', 'area_atuacao'];
    );
}

const mapStateToProps = (state) => {
    return { curriculum: state.curriculum,
        account: state.signIn.account  };
};


export default connect(mapStateToProps, {curriculumCreate})(CreateCurriculum);
