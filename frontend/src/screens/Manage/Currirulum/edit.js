import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import FormGroup from '../../../components/FormGroup';
import { getFormData } from '../../../helpers/form';
import { curriculumGet, curriculumUpdate } from '../Currirulum/CurriculumActions';

const CurriculumEdit = ({ curriculum, curriculumGet, curriculumUpdate }, props) => {
    const { account } = props;
    console.log(account)
    const { id } = useParams();

    useEffect(() => {
        curriculumGet(id);
    }, [id, curriculumGet])

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e)
        curriculumUpdate(id, data);
    };

    return (
        <div id="conteudo" class="boxsimples">
            <div class="titulo1">Editar Curriculo</div>
            
            <div>
                <form onSubmit={submitHandler}>
                    <FormGroup label="Nome Completo" name="name" data={curriculum} type="text" />
                    <FormGroup label="Idade" name="idade" data={curriculum} type="text" />
                    <FormGroup label="Instituição que frequentou ensino fundamental" name="ensino_fundamental" data={curriculum} type="text" />
                    <FormGroup label="Instituição que frequentou ensino medio" name="ensino_medio" data={curriculum} type="text" />
                    <FormGroup label="Instituição que frequentou ensino superior" name="ensino_superior" data={curriculum} type="text" />
                    <FormGroup label="Rua" name="rua" data={curriculum} type="text" />
                    <FormGroup label="Cep" name="cep" data={curriculum} type="text" />
                    <FormGroup label="Bairro" name="bairro" data={curriculum} type="text" />
                    <FormGroup label="Cidade" name="cidade" data={curriculum} type="text" />
                    <FormGroup label="Estado" name="estado" data={curriculum} type="text" />
                    <FormGroup label="Ocupação profissional atual" name="atuacao_profissional" data={curriculum} type="text" />
                    <FormGroup label="Área de atuação" name="area_atuacao" data={curriculum} type="text" />

                    <input type="submit" value="Editar curriculo" />
                </form>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        curriculum: state.curriculum.curriculum,
        account: state.signIn.account 
    }
};

export default connect(mapStateToProps, { curriculumGet, curriculumUpdate })(CurriculumEdit);
