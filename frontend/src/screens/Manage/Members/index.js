import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { membersList, membersSearch } from '../../Manage/Members/MembersActions';
import MembersListComponent from './MembersListComponent';

const Members = ({ membersList }) => {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        async function exibir() {
            const { payload } = await membersList();
            setMembers(payload.data.data)
        }
        exibir()
    }, [membersList]);

    const onChangeHandler = async e => {
        const { payload } = membersSearch(e.target.value);
        setMembers((await payload).data.data)
    }

    return (
        <div id="home" class="boxsimples">

            <input
                onChange={e => onChangeHandler(e)}
                placeholder="Pesquise por nome..."
            />

            <div class="titulo1">Participantes</div>

            <MembersListComponent members={members} />

        </div>
    );
};

const mapStateToProps = (state) => {
    return { members: state.members };
};

export default connect(mapStateToProps, { membersList })(Members);