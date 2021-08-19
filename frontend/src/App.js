import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import News from './screens/Manage/News/index';
import NewCreate from './screens/Manage/News/create';
import ArticleCreate from './screens/Manage/Articles/create';
import Articles from './screens/Manage/Articles';
import Schedule from './screens/Manage/Schedule';
import ScheduleCreate from './screens/Manage/Schedule/create';
import Project from './screens/Manage/Projects/index';
import CreateProject from './screens/Manage/Projects/create';

const App = () => {
    return (
        <BrowserRouter>
        
        <div>
            
            <nav className="bar">
                <img src="/media/Logo.png" alt="Logo"/>
                <ul>
                    
                    <li><Link to="/news">Noticias</Link> </li>
                    <li><Link to="/articles">Artigos</Link> </li>
                    <li><Link to="/projects">Projetos</Link> </li>
                    <li><Link to="/schedule">Agenda</Link></li>
                    <li><Link to="/sign-in">Login</Link> </li>
                    <li><Link to="/sign-up">Criar Conta</Link></li>
                    
                </ul>
            </nav>
            <Switch>
                <Route path="/news">
                    <News/>
                </Route>
                <Route path="/articles">
                   <Articles/>
                </Route>
                <Route path="/schedule">
                   <Schedule/>
                </Route>
                <Route path="/projects">
                   <Project/>
                </Route>
                <Route path="/Manage/News/create">
                    <NewCreate/>
                </Route>
                <Route path="/Manage/Articles/create">
                    <ArticleCreate/>
                </Route>
                <Route path="/Manage/Schedule/create">
                    <ScheduleCreate/>
                </Route>
                <Route path="/Manage/Projects/create">
                    <CreateProject/>
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