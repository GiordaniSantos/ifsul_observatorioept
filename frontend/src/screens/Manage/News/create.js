import React from 'react';
import { getFormData } from '../../../helpers/form';
import { Link } from 'react-router-dom';
import { newsCreate } from './NewsActions';
import { connect } from 'react-redux';



const CreateNew = ()=> {

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);   
       newsCreate(data)
    }

    

    return(
        <div className="">
        <h1>Crie uma noticia</h1>
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
                    <label for="descricao">Descrição</label>
                    <textarea id="descricao" name="description" rows="5" cols="33"></textarea>
                </div>
                <div>
                    <button>Enviar noticia</button>
                </div>
            </form>
            <div>
                <Link to='/Manage/News/NewsAdmin'><button>Cancelar</button></Link>
            </div>
        </div>
    </div>
       
    );
}

const mapStateToProps = (state) => {
    return { neww: state.neww };
};


export default connect(mapStateToProps, {newsCreate})(CreateNew);
