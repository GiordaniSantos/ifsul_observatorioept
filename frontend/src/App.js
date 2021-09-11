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
                                <a href="/">
                                    <img class="logo" src="Logo completo 2.png" alt="Observatório da Educação Profissional e Tecnológica (EPT) do IFSul" />
                                </a>
                            </td>
                            <td>
                                <nav>
                                    <ul>
                                        <li><Link class="link link--metis" to="/">Sobre</Link></li>
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

                    <div id="home" class="boxsimples">
                        <div >
                            <p>O <b>Observatório da Educação Profissional e Tecnológica (EPT) IFSul</b> tem sua origem em demandas que tematizam a história e os rumos das políticas educacionais em EPT, trata-se de um projeto que conta com o apoio da Fapergs e da Seção Sinasefe IFSul. </p>
                            <p>O Observatório possui como objetivo promover atividades de estudo e pesquisa em interlocução com a comunidade acadêmica sobre a legislação educacional contemporânea e seus desdobramentos para os Institutos Federais, além de mapear pesquisas e práticas pedagógicas, constituindo um repositório sobre EPT.</p>
                            <p>O Observatório da Educação Profissional e Tecnológica (EPT) do IFSul está também em parceria com a Pró-reitoria de Ensino com ações que estimulam a reflexão sobre as diretrizes da educação profissional e tecnológica e seu impacto nos institutos federais.  </p>
                        </div>
                    </div>
                    
                </Route>
            </Switch>


            <div id="rodape">
                <div class="row">
                    <div class="column">
                        <b>Acompanhe nossas redes:</b>
                        <ul>
                            <li><a class="link link--metis" href="https://www.instagram.com/observatorioifsul/" target="_blank">Instagram</a></li>
                            <li><a class="link link--metis" href="#" target="_blank">Facebook</a></li>
                            <li><a class="link link--metis" href="https://www.youtube.com/c/Observat%C3%B3rioEPTIFSul" target="_blank">YouTube</a></li>
                        </ul>                            
                    </div>

                    <div class="column">
                        <b>Institucional e parcerias:</b>
                        <ul>
                            <li><a class="link link--metis" href="http://www.ifsul.edu.br/" target="_blank">IFSul</a></li>
                            <li><a class="link link--metis" href="https://www.sinasefeifsul.org.br/" target="_blank">Sinasefe IFSul</a></li>
                            <li><a class="link link--metis" href="https://www.ufrgs.br/observatoriodoensinomedio-rs/" target="_blank">Observatório do Ensino Médio – RS</a></li>
                        </ul>
                    </div>
                </div> 

                <div class="row">
                    <p>Observatório EPT do IFSul. 2021. Todos os direitos reservados.</p>
                </div>
            </div>

        </div>
        </BrowserRouter>
    );
};

export default App;