import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from './SignInActions';


const SignIn = (props) => {
    const { account, signIn } = props;

    const submitHandler = (e) => {
        e.preventDefault();

        signIn({email: 'dani12xbox@gmail.com', password: '1234'});
    };

    console.log('*** SignIn.account', account);

    return(
        <div className="">
            <h1>Login</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="">
                        <label>Senha</label>
                        <input type="password" />
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