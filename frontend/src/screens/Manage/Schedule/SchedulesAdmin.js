import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { schedulesList } from '../Schedule/ScheduleActions';

const SchedulesAdmin = ({ schedulesList}) => {
   const [schedules, setSchedules] = useState([]);

    useEffect(()=>{
        async function exibir() {
            const { payload } = await schedulesList();
            setSchedules(payload.data.data)
        } 

        exibir()
     }, []);

    

    // useEffect(()=>{
    //     articlesList()
    //  }, [articlesList]);

    return(
        <div>
            <div>
                <h1>Agenda</h1>
            </div>

            {schedules && schedules.length 
            ? schedules.map( (schedule) => {
                // console.log(article)
                return (
                <div key={schedule.schedule_id}>
                    <section>
                        <article>
                        <h3>{schedule.date}</h3>
                            <div>
                                {schedule.description} <br/>
                                 <br/>
                                <a class="read-more" href={schedule.external_link} >Link da publicação</a>
                            </div>
                        </article>
                        <div>
                            <Link to={`/Manage/Schedule/edit/${schedule.schedule_id}`}>
                                Editar um evento
                            </Link>
                         </div>
                    </section>
                </div>
            );
        }) : null}
            
        <br></br>
            
         <div>
                <Link to="/Manage/Schedule/create">
                    Criar um evento
                </Link>
            </div>

            <br/>
            <div>
                <Link to='/management'><button>Voltar</button></Link>
            </div>

        </div>
        
    );
};

const mapStateToProps = (state) => {
    return { schedules: state.schedules };
};

export default connect(mapStateToProps, {schedulesList})(SchedulesAdmin);