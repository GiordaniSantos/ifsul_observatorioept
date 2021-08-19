import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { schedulesList } from '../Schedule/ScheduleActions';

const Schedule = ({ schedulesList}) => {
   const [schedules, setSchedules] = useState([]);

    useEffect(()=>{
        exibir()
     }, []);

    async function exibir() {
        const { payload } = await schedulesList();
        setSchedules(payload.data.data)
    } 

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
                    </section>
                </div>
            );
        }) : null}
            
        
            
         <div>
                <Link to="/Manage/Schedule/create">
                    Criar um evento
                </Link>
            </div>
        </div>
        
    );
};

const mapStateToProps = (state) => {
    return { schedules: state.schedules };
};

export default connect(mapStateToProps, {schedulesList})(Schedule);