import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from './SignUpActions';
import { getFormData } from '../../helpers/form';

const SignUp = (props) => {
    const {signUp, account } = props;

    const submitHandler = (e) => {
        e.preventDefault();
        const data = getFormData(e);   
        signUp(data);
    };

    if(account){
        return <Redirect to="/management" />;
    } 

    return(
        <div className="">
            <h1>Cadastrar</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="">
                        <label>Nome</label>
                        <input type="text" name="name" />
                    </div>
                    <div className="">
                        <label>Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="">
                        <label>Senha</label>
                        <input type="password" name="password" />
                    </div>
                    <div className="">
                        <label>Confirmar Senha</label>
                        <input type="password" name="password_confirmation" />
                    </div>
                    <div>
                        <button>Cadastrar</button>
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
    return { account: state.signUp.account }
};


export default connect(mapStateToProps, {signUp})(SignUp);