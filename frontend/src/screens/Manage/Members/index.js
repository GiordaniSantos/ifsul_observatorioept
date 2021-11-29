import { apiGet } from '../../../helpers/api';
import React, { useEffect, useState } from 'react';
import MembersListComponent from './MembersListComponent';

const Members = () => {
    // aqui defina uma informacao (members) no estado e define o metodo setMembers para atualizar esse estado, 
    // o parâmetro do usetState define o estado inicial
    // referencia: https://pt-br.reactjs.org/docs/hooks-state.html
    const [members, setMembers] = useState([]);

    // chamado depois que o react atualiza o DOM (render)
    // Usando esse Hook, você diz ao React que o componente precisa fazer algo apenas depois (de toda) da renderização
    // referencia: https://pt-br.reactjs.org/docs/hooks-effect.html
    useEffect(() => {
        async function exibir() {
            const payload = apiGet('/members');
            setMembers((await payload).data.data)
        }
        exibir()
    }, []);
    // esse parâmetro entre [] serve para dizer ao react para re-executar o efeito apenas quando seus valor mudar

    const onChangeHandler = async e => {
        const payload = apiGet('/members/pesquisar?termo=' + e.target.value);
        setMembers((await payload).data.data)
    }

    return (
        <div id="home" class="boxsimples">

            <div class="row">
                <div class="column">
                    <div class="titulo1">Participantes</div>
                </div>

                <div class="column column_right search">
                    <input 
                        type="text"
                        onChange={e => onChangeHandler(e)}
                        placeholder="Pesquise por nome..."
                    />
                </div>
            </div>

            <MembersListComponent members={members} />

        </div>
    );
}

export default Members;