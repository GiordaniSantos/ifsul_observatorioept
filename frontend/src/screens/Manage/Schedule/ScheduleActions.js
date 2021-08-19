import { apiPost, apiGet } from '../../../helpers/api';

export const SCHEDULE_CREATE = 'SCHEDULE_CREATE';
export const SCHEDULE_LIST = 'SCHEDULE_LIST';

export const scheduleCreate = (data) => {
    // fazer requisição na API
    const payload = apiPost('/schedule', data);
    return { type: SCHEDULE_CREATE, payload }
};

export const schedulesList = (data) => {
    // fazer requisição na API
    const payload = apiGet('/schedule');
    return { type: SCHEDULE_LIST, payload }
};