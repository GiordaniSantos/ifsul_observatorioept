import { apiPost, apiGet } from '../../../helpers/api';

export const ARTICLES_CREATE = 'ARTICLES_CREATE';
export const ARTICLES_LIST = 'ARTICLES_LIST';

export const articlesCreate = (data) => {
    // fazer requisição na API
    const payload = apiPost('/article', data);
    return { type: ARTICLES_CREATE, payload }
};

export const articlesList = (data) => {
    // fazer requisição na API
    const payload = apiGet('/article');
    return { type: ARTICLES_LIST, payload }
};