import React, { useEffect, useState } from 'react';
import { practicesList } from '../../Manage/Practices/PracticesActions';
import moment from 'moment';
import 'moment/locale/pt-br';

const Practices = () => {
    const [practices, setPractices] = useState([]);

    useEffect(() => {
        async function exibir() {
            const { payload } = practicesList();
            setPractices((await payload).data.data)
        }
        exibir()
    }, []);

    const onChangeHandler = async e => {
        // const { payload } = membersSearch(e.target.value);
        // setMembers((await payload).data.data)
    }

    return (
        <div id="home" class="boxsimples">

            <div class="row">
                <div class="column">
                    <div class="titulo1">Práticas pedagógicas</div>
                </div>

                <div class="column column_right search">
                    <input
                        type="text"
                        onChange={e => onChangeHandler(e)}
                        placeholder="Pesquise aqui..."
                    />
                </div>
            </div>

            <div>
                {
                    practices && practices.length
                        ? practices.map((practice) => {
                            return (
                                <div class="boxsimples">
                                    <p class="titulo2">{practice.title}</p>
                                    <div class="subtitulo1">{practice.place} - {moment(practice.createdAt).format('LL')} [{practice.subject}]</div>
                                    <p>{practice.abstract}</p>
                                    <div class="artigo-link">
                                        <a class="link link--dia" rel="noreferrer" target="_blank" href={practice.link}>Leia mais.</a>
                                    </div>
                                </div>
                            );
                        }
                        ) : null
                }
            </div>

        </div>
    );
}

export default Practices;