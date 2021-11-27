import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { schedulesList } from '../Schedule/ScheduleActions';
import moment from 'moment';
import 'moment/locale/pt-br';

const Schedule = ({ schedulesList }) => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        async function exibir() {
            const { payload } = await schedulesList();
            setSchedules(payload.data.data)
        }
        exibir()
    }, [schedulesList]);

    return (
        <div id="conteudo">
            <div class="titulo1">Agenda</div>

            {schedules && schedules.length
                ? schedules.map((schedule) => {
                    return (
                        <div key={schedule.schedule_id}>
                            <section>
                                <article>
                                    <h3>{moment(schedule.date).format('LL')}</h3>
                                    <div>
                                        {schedule.description} <br />
                                        <br />
                                        <a class="read-more" href={schedule.external_link}>Link da publicação</a>
                                    </div>
                                </article>
                            </section>
                        </div>
                    );
                }) : null}

        </div>

    );
};

const mapStateToProps = (state) => {
    return { schedules: state.schedules };
};

export default connect(mapStateToProps, { schedulesList })(Schedule);