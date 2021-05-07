import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from './SignUpActions';

const SignUp = () => {

    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);

        console.log(data);
        
        signUp(data);
    };

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