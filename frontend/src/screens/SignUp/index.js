import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return(
        <div className="">
            <h1>Cadastrar</h1>
            <div>
                <form>
                    <div className="">
                        <label>Nome</label>
                        <input type="text" />
                    </div>
                    <div className="">
                        <label>Email</label>
                        <input type="text" />
                    </div>
                    <div className="">
                        <label>Senha</label>
                        <input type="password" />
                    </div>
                    <div className="">
                        <label>Confirmar de Senha</label>
                        <input type="password" />
                    </div>
                    <div className="">
                        <label>Instituição Associada</label>
                        <input type="text" />
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

export default SignUp;