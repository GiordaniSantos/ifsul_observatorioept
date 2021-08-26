import React from 'react';
import { getFormData } from '../../../helpers/form';
import { Link } from 'react-router-dom';
import { articlesCreate } from './ArticlesActions';
import { connect } from 'react-redux';



const ArticleCreate = ()=> {

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);   
        articlesCreate(data)
    }

    

    return(
        <div className="">
        <h1>Crie um artigo</h1>
        <div>
            <form onSubmit={submitHandler}>
                <div className="">
                    <label>Autor</label>
                    <input type="text" name="authors" />
                </div>
                <div className="">
                    <label>Titulo</label>
                    <input type="text" name="title" />
                </div>
                <div className="">
                    <label>Ano</label>
                    <input type="text" name="year" />
                </div>
                <div className="">
                    <label>Veiculo de disseminação</label>
                    <input type="text" name="dissemination_vehicle" />
                </div>
                <div className="">
                    <label>Link de acesso</label>
                    <input type="text" name="access_link" />
                </div>
                <div>
                    <button>Enviar artigo</button>
                </div>
            </form>
            <div>
                <Link to='/Manage/Articles/ArticlesAdmin'><button>Cancelar</button></Link>
            </div>
        </div>
    </div>
       
    );
}

const mapStateToProps = (state) => {
    return { article: state.article };
};


export default connect(mapStateToProps, {articlesCreate})(ArticleCreate);
