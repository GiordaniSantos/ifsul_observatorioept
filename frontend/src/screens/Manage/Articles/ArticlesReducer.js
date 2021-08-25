import { ARTICLES_CREATE, ARTICLES_LIST } from '../Articles/ArticlesActions';

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