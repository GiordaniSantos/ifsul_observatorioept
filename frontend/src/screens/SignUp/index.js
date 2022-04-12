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
        return <Redirect to="/Curriculum" />;
    } 

    return(
        <div id="conteudo" class="boxsimples">
            <h1 class="titulo1">Cadastrar nova conta</h1>
            <div>
                <form onSubmit={submitHandler}>
                        <label>Nome</label>
                        <input type="text" name="name" />
                    
                        <label>Email</label>
                        <input type="text" name="email" />
                    
                        <label>Senha</label>
                        <input type="password" name="password" />
                 <div>
                     
                        <label>Confirmar Senha</label>
                        <input type="password" name="password_confirmation" />
                     </div>   

                        <input type="submit" value="Cadastrar" />

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