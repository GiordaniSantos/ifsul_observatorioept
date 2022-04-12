import React, { useEffect, useState } from 'react';
import { apiGet } from '../../../helpers/api';
import { curriculumList } from '../../Manage/Currirulum/CurriculumActions'; 
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const Curriculum = ( props ) => {
    const { account } = props;
    console.log(account)
    const [Curriculum, setCurriculum] = useState([]);


    useEffect(()=>{
        async function exibir() {
            const { payload } = curriculumList();

            setCurriculum((await payload).data.data)

        } 
        exibir()
     }, []);

     const onChangeHandler = async e => {
        // e.target.value ---> pega o conteudo da caixa de texto que gerou o evento onChangeHandler
        const payload = apiGet('/article/s/pesquisar?termo=' + e.target.value);
        setCurriculum((await payload).data.data)
    }

    console.log(Curriculum)
    return(
        <div id="conteudo">
            
            <div class="column column_right search">
                    <input 
                        type="text"
                        onChange={e => onChangeHandler(e)}
                        placeholder="Pesquise pelo titulo..."
                    />
            </div>

            {Curriculum && Curriculum.length 
            ? Curriculum.map( (curriculum) => {
                // console.log(article)
                if(account.user_id === curriculum.userId){
                    
                    return (
                    <div key={curriculum.userId}>
    
                        <section>
                            <article>
                                <div class="titulo1">Seu Curriculo</div>
                                <div class="artigo-autores">
                                <h1>Informações</h1>
                                    Nome completo: {curriculum.name}   <br/>
                                    Idade: {curriculum.idade} <br/>
                                    <h1>Formação</h1>
                                    Ensino fundamental: {curriculum.ensino_fundamental} <br/>
                                    Ensino medio: {curriculum.ensino_medio} <br/>
                                    Ensino Superior: {curriculum.ensino_superior} <br/>
                                    <h1>Endereço</h1>
                                    rua: {curriculum.rua} <br/>
                                    cep: {curriculum.cep} <br/>
                                    bairro: {curriculum.bairro} <br/>
                                    cidade: {curriculum.cidade} <br/>
                                    Estado: {curriculum.Estado} <br/>
                                    <h1>Profissional</h1>
                                    Ocupação atual: {curriculum.atuacao_profissional} <br/>
                                    Área de atuação: {curriculum.area_atuacao} <br/>
                                </div>
                                <Link to={`/Manage/Curriculum/edit/${account.user_id}`}><button>Editar Curriculo</button></Link>
                                <div class="artigo-serparador"></div>
                            </article>
                           
                        </section>

                    </div>
                );
                } 
              //  if(curriculum.userId ===null){
               //     return <h1>Você não possui curriculo cadastrado</h1>  
               // }
        }) : null}
        
        <Link to='/management'><button>Ir para Administração</button></Link>
        <Link to='/Manage/Curriculum/create'><button>Criar Curriculo</button></Link>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { curriculum: state.curriculum,
        account: state.signIn.account  };
};


export default connect(mapStateToProps, {  })(Curriculum);