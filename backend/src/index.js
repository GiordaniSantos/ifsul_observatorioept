const express = require('express');
const db = require('./models');
const response = require('./middlewares/response');
const checkJwt = require('./middlewares/jwt');

const authController = require('./controllers/auth');

const articleController = require('./controllers/articleController');
const scheduleController = require('./controllers/scheduleController');
const projectController = require('./controllers/projectController');
const newsController = require('./controllers/newsController');
const userController = require('./controllers/userController');
const researchLineController = require('./controllers/researchLineController');
const searchGroupController = require('./controllers/searchGroupController');

const app = express();

app.use(response);
app.use(checkJwt);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// /auth/sign-in
// /auth/sign-up
app.use('/auth', authController);

app.use('/article' ,articleController);
app.use('/schedule' ,scheduleController);
app.use('/project', projectController);
app.use('/news', newsController);
app.use('/user', userController);
app.use('/research_line', researchLineController);
app.use('/search_group', searchGroupController);

app.get('/', (req, res)=>{
    return res.json('Api running...');
});

db.sequelize.sync().then(() =>{
    app.listen(3001, () => {
        console.log('listening on port 3001');
    });
});