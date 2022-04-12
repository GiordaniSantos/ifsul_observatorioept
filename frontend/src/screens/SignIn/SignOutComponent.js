import React from 'react';
import { Link } from 'react-router-dom';

class SignOutComponent extends React.Component {
    render() {
        let account = this.props.account;

        if(account){
            return(

                <li><Link class="link link--metis" to="/cluster">Sair</Link></li>
            ) 
        } 
    
    }
}

export default SignOutComponent;