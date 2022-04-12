import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn } from './SignInActions';
import { getFormData } from '../../helpers/form';




const SignIn = (props) => {
    const { signIn, account } = props;



    
    if(account){
        
     //  return <Redirect to="/management"  />;
       // return <Redirect to={`/Manage/Curriculum/edit/${account.user_id}`}  />;
      // return <Redirect to="/Manage/Curriculum/create"  />;
       return <Redirect to="/Curriculum"  />;
    } 


    const submitHandler = (e) => {
       
        e.preventDefault();
        
        const data = getFormData(e);
        if(data.email === ""){
            alert("Email está vazio!");
        }
        signIn(data);
    };


    return(
        <div id="conteudo" class="boxsimples">
            <h1 class="titulo1">Realizar Login</h1>
            <div>   
                <form onSubmit={submitHandler}>
                  
                        <label>Email</label>
                        <input type="text" name="email"/>
                    

                        <label>Senha</label>
                        <input type="password" name="password"/>
                   
                        <input type="submit" value="login" />
                </form>
                <div>
                    <Link to='/'><button>Cancelar</button></Link>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { account: state.signIn.account,
        curriculum: state.curriculum }
};


export default connect(mapStateToProps, {signIn})(SignIn);