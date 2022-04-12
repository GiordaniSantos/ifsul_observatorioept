import { apiGet } from '../../../helpers/api';
import React, { useEffect, useState } from 'react';

const Cluster = () => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        async function exibir() {
            const payload = apiGet('/members');

            setMembers((await payload).data.data)
        }
        exibir()
    }, []);

    const onChangeHandler = async e => {
        // e.target.value ---> pega o conteudo da caixa de texto que gerou o evento onChangeHandler
        const payload = apiGet('/members/pesquisar?termo=' + e.target.value);
        setMembers((await payload).data.data)
    }

    return (
        <div id="home" class="boxsimples">

            <div class="row">
                <div class="column">
                    <div class="titulo1">Digite o Tema</div>
                </div>

                <div class="column column_right search">
                    <input 
                        type="text"
                        onChange={e => onChangeHandler(e)}
                        placeholder="palavra-chave..."
                    />
                </div>
            </div>

         
        </div>
    );
}

export default Cluster;