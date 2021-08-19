import { apiPost, apiGet } from '../../../helpers/api';

export const NEWS_CREATE = 'NEWS_CREATE';
export const NEWS_LIST = 'NEWS_LIST';

export const newsCreate = (data) => {
    // fazer requisição na API
    const payload = apiPost('/news', data);
    return { type: NEWS_CREATE, payload }
};

export const newsList = (data) => {
    // fazer requisição na API
    const payload = apiGet('/news');
    return { type: NEWS_LIST, payload }
};