import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import News from './screens/Manage/News/index';
import NewsAdmin from './screens/Manage/News/NewsAdmin';
import NewCreate from './screens/Manage/News/create';
import NewEdit from './screens/Manage/News/edit';
import ArticlesAdmin from './screens/Manage/Articles/ArticlesAdmin';
import ArticleCreate from './screens/Manage/Articles/create';
import Articles from './screens/Manage/Articles';
import Schedule from './screens/Manage/Schedule';
import SchedulesAdmin from './screens/Manage/Schedule/SchedulesAdmin';
import ScheduleCreate from './screens/Manage/Schedule/create';
import Project from './screens/Manage/Projects/index';
import CreateProject from './screens/Manage/Projects/create';
import Management from './screens/Manage/Management/index';
import ProjectsAdmin from './screens/Manage/Projects/ProjectsAdmin';
import ArticleEdit from './screens/Manage/Articles/edit';
import ScheduleEdit from './screens/Manage/Schedule/edit';
import ProjectEdit from './screens/Manage/Projects/edit';

const App = () => {
    return (
        <BrowserRouter>
        
        <div>
            <div className="bar">
                <div>
                    <table>
                        <tr>
                            <td>
                                <img class="logo" src="Logo.png" alt="Observatório da Educação Profissional e Tecnológica (EPT) do IFSul" />
                                <p>
                                Observatório da Educação <br></br>
                                Profissional e Tecnológica (EPT)<br></br> do IFSul</p>
                            </td>
                            <td>
                                <nav>
                                    <ul>
                                        <li><Link class="link link--metis" to="/news">Notícias</Link></li>
                                        <li><Link class="link link--metis" to="/articles">Artigos</Link> </li>
                                        <li><Link class="link link--metis" to="/projects">Projetos</Link> </li>
                                        <li><Link class="link link--metis" to="/schedule">Agenda</Link></li>
                                        <li><Link class="link link--metis" to="/sign-in">Login</Link> </li>
                                        <li><Link class="link link--metis" to="/sign-up">Criar Conta</Link></li>
                                        <li><Link class="link link--metis" to="/management">Admin</Link></li>
                                    </ul>
                                </nav>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
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
                <Route path="/Manage/News/NewsAdmin">
                    <NewsAdmin/>
                </Route>
                <Route path="/Manage/News/create">
                    <NewCreate/>
                </Route>
                <Route path="/Manage/News/edit/:id">
                    <NewEdit/>
                </Route>
                <Route path="/Manage/Articles/edit/:id">
                    <ArticleEdit/>
                </Route>
                <Route path="/Manage/Articles/ArticlesAdmin">
                    <ArticlesAdmin/>
                </Route>
                <Route path="/Manage/Articles/create">
                    <ArticleCreate/>
                </Route>
                <Route path="/Manage/Schedule/SchedulesAdmin">
                    <SchedulesAdmin/>
                </Route>
                <Route path="/Manage/Schedule/create">
                    <ScheduleCreate/>
                </Route>
                <Route path="/Manage/Schedule/edit/:id">
                    <ScheduleEdit/>
                </Route>
                <Route path="/Manage/Projects/edit/:id">
                    <ProjectEdit/>
                </Route>
                <Route path="/Manage/Projects/ProjectsAdmin">
                    <ProjectsAdmin/>
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
                <Route path="/management">
                    <Management/>
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