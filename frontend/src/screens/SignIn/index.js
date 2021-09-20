import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from './SignInActions';
import { getFormData } from '../../helpers/form';

const SignIn = (props) => {
    const { signIn, account } = props;

    if(account){
        return <Redirect to="/management" />;
    } 


    const submitHandler = (e) => {
        e.preventDefault();

        const data = getFormData(e);
        signIn(data);
    };


    return(
        <div className="">
            <h1>Login</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="">
                        <label>Email</label>
                        <input type="text" name="email"/>
                    </div>
                    <div className="">
                        <label>Senha</label>
                        <input type="password" name="password"/>
                    </div>
                    <div>
                        <button>Logar</button>
                    </div>
                </form>
                <div>
                    <Link to='/'><button>Cancelar</button></Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { account: state.signIn.account }
};


export default connect(mapStateToProps, {signIn})(SignIn);