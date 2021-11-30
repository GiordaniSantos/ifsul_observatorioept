import { apiPost, apiGet, apiPut } from '../../../helpers/api';

export const ARTICLES_CREATE = 'ARTICLES_CREATE';
export const ARTICLES_LIST = 'ARTICLES_LIST';
export const ARTICLE_UPDATE = 'ARTICLE_UPDATE';
export const ARTICLE_GET = 'ARTICLE_GET';

export const articlesCreate = (data) => {
    // fazer requisição na API
    const payload = apiPost('/article', data);
    return { type: ARTICLES_CREATE, payload }
};

export const articleUpdate = (id, data) => {
    // fazer requisição na API
    const payload = apiPut(`/article/${id}`, data);
    return { type: ARTICLE_UPDATE, payload }
};

export const articleGet = (id) => {
    const payload = apiGet(`/article/${id}`);
    return { type: ARTICLE_GET, payload }
};

export const articlesList = (data) => {
    const payload = apiGet('/article');
    return { type: ARTICLES_LIST, payload }
};