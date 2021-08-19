import React from 'react';
import { getFormData } from '../../../helpers/form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { scheduleCreate } from './ScheduleActions';



const ScheduleCreate = ()=> {

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);   
        scheduleCreate(data)
    }

    

    return(
        <div className="">
        <h1>Crie um evento</h1>
        <div>
            <form onSubmit={submitHandler}>
                <div className="">
                    <label>Data do evento</label>
                    <input type="text" name="date" />
                </div>
                <div className="">
                    <label>Descrição</label>
                    <input type="text" name="description" />
                </div>
                <div className="">
                    <label>Link de acesso</label>
                    <input type="text" name="external_link" />
                </div>
                <div>
                    <button>Enviar agenda</button>
                </div>
            </form>
            <div>
                <Link to='/'><button>Cancelar</button></Link>
            </div>
        </div>
    </div>
       
    );
}

const mapStateToProps = (state) => {
    return { schedule: state.schedule };
};


export default connect(mapStateToProps, {scheduleCreate})(ScheduleCreate);
