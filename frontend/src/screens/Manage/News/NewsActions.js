import { apiPost, apiPut, apiGet } from '../../../helpers/api';

export const NEWS_CREATE = 'NEWS_CREATE';
export const NEW_GET = 'NEW_GET';
export const NEWS_LIST = 'NEWS_LIST';
export const NEW_UPDATE = 'NEW_UPDATE';

export const newsCreate = (data) => {
    // fazer requisição na API
    const payload = apiPost('/news', data);
    return { type: NEWS_CREATE, payload }
};

export const newUpdate = (id, data) => {
    // fazer requisição na API
    const payload = apiPut(`/news/${id}`, data);
    return { type: NEW_UPDATE, payload }
};

export const newGet = (id) => {
       const payload = apiGet(`/news/${id}`);
       return { type: NEW_GET, payload }
}

export const newsList = (data) => {
    // fazer requisição na API
    const payload = apiGet('/news');
    return { type: NEWS_LIST, payload }
};