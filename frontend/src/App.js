import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import News from './screens/Manage/News/index'

const App = () => {
    return (
        <BrowserRouter>
        
        <div>
            <nav className="bar">
                <ul>
                    <li><Link to="/news">Noticias</Link> </li>
                    <li><Link to="/sign-in">Login</Link> </li>
                    <li><Link to="/sign-up">Criar Conta</Link></li>
                    
                </ul>
            </nav>
            <Switch>
                <Route path="/news">
                    <News/>
                </Route>
                <Route path="/sign-in">
                    <SignIn/>
                </Route>
                <Route path="/sign-up">
                    <SignUp/>
                </Route>
                <Route path="/">
                    <h1>Home Page</h1>
                </Route>
            </Switch>
        </div>
        </BrowserRouter>
    );
};

export default App;