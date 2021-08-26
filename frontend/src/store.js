import { createStore, applyMiddleware, combineReducers } from 'redux';
import ReduxPromise from 'redux-promise';
import NewsReducer from './screens/Manage/News/NewsReducer';
import ArticlesReducer from './screens/Manage/Articles/ArticlesReducer';

import signInReducer from './screens/SignIn/SignInReducer';
import signUpReducer from './screens/SignUp/SignUpReducer';
import ScheduleReducer from './screens/Manage/Schedule/ScheduleReducer';
import ProjectReducer from './screens/Manage/Projects/ProjectReducer';

const reducers = combineReducers({
    signIn: signInReducer,
    signUp: signUpReducer,
    neww: NewsReducer,
    article: ArticlesReducer,
    schedule: ScheduleReducer,
    project: ProjectReducer
});

const store = createStore(reducers, applyMiddleware(ReduxPromise));

export default store;