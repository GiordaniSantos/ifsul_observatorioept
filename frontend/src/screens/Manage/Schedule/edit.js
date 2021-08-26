import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import FormGroup from '../../../components/FormGroup';
import {getFormData} from '../../../helpers/form';
import { scheduleGet, scheduleUpdate } from './ScheduleActions';

const ScheduleEdit = ({schedule, scheduleGet, scheduleUpdate})=> {
 const { id } = useParams();

 useEffect(()=>{
    scheduleGet(id);
 }, [id, scheduleGet])

 const submitHandler = (e)=>{
    e.preventDefault();
    const data = getFormData(e)
    scheduleUpdate(id, data);

 };

    return(
        <div className="">
        <h1>Editar noticia</h1>
        <div>
            <form onSubmit={submitHandler}>
            <FormGroup label="Data do evento" name="date" data={schedule} type="text" />
            <FormGroup label="Descrição" name="description" data={schedule} type="text" />
            <FormGroup label="Link de acesso" name="external_link" data={schedule} type="text" />
            
                <div>
                    <button>Editar noticia</button>
                </div>
            </form>
            <div>
                <Link to='/Manage/Schedule/SchedulesAdmin'><button>Voltar</button></Link>
            </div>
        </div>
    </div>
       
    );
}

const mapStateToProps = (state) => {
    return {
        schedule: state.schedule.schedule,
    }
};

export default connect(mapStateToProps, { scheduleGet, scheduleUpdate }) (ScheduleEdit);
