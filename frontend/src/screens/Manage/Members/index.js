import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { membersList } from '../../Manage/Members/MembersActions'; 

const Members = ( { membersList } ) => {
   const [members, setMembers] = useState([]);

    useEffect(()=>{
        exibir()
     }, []);

    async function exibir() {
        const { payload } = await membersList();
        setMembers(payload.data.data)
    } 

    return(
        <div id="home" class="boxsimples">                        
            <div class="titulo1">Participantes</div>

            {members && members.length 
            ? members.map( (member) => {
                console.log(member)
                return (
                <div>
                    <p><a class="link link--dia" href={member.link_curriculum} target="_blank">{member.name} ({member.institution})</a></p>
                </div>
            );
        }) : null}
            
        </div>
    );
};

const mapStateToProps = (state) => {
    return { members: state.members };
};

export default connect(mapStateToProps, {membersList})(Members);