import React from 'react';

class MembersListComponent extends React.Component {
    render() {
        let members = this.props.members;

        console.log('members list render');

        return (
            <div>
                {
                    members && members.length
                        ? members.map((member) => {
                            return (
                                <div>
                                    <p><a class="link link--dia" rel="noreferrer" href={member.link_curriculum} target="_blank">{member.name} ({member.institution})</a></p>
                                </div>
                            );
                        }
                        ) : null
                }
            </div>
        );
    }
}

export default MembersListComponent;