/* eslint-disable import/no-anonymous-default-export */
import { ARTICLES_CREATE, ARTICLES_LIST, ARTICLE_UPDATE, ARTICLE_GET } from '../Articles/ArticlesActions';

const initialState = {
    article: null,
    articles: [],
}

export default function (state = initialState, action) {
    const { type, payload } = action;
    switch(type) {
        case ARTICLES_CREATE: {
            const response = payload ? payload.data : null;
            const article = response ? response.data : null;
             return { ...state, article};
        }  case ARTICLE_UPDATE: {
            const response = payload ? payload.data : null;
            const article = response ? response.data : null;
            return { ...state, article};
        } case ARTICLE_GET: {
            const response = payload ? payload.data : null;
            const article = response ? response.data : null;
            
            return {...state, article};
        }
        case ARTICLES_LIST: {
            const response = payload ? payload.data : null;
            const articles = response ? response.data : null;
            return {...state, articles};
            
        }
        default: {
            return state;
        }
    }
};