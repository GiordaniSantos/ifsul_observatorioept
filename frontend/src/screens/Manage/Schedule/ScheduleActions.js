import { apiPost, apiGet, apiPut } from '../../../helpers/api';

export const SCHEDULE_CREATE = 'SCHEDULE_CREATE';
export const SCHEDULE_LIST = 'SCHEDULE_LIST';
export const SCHEDULE_UPDATE = 'SCHEDULE_UPDATE';
export const SCHEDULE_GET = 'SCHEDULE_GET';

export const scheduleCreate = (data) => {
    // fazer requisição na API
    const payload = apiPost('/schedule', data);
    return { type: SCHEDULE_CREATE, payload }
};

export const scheduleUpdate = (id, data) => {
    // fazer requisição na API
    const payload = apiPut(`/schedule/${id}`, data);
    return { type: SCHEDULE_UPDATE, payload }
};

export const scheduleGet = (id) => {
       const payload = apiGet(`/schedule/${id}`);
       return { type: SCHEDULE_GET, payload }
}

export const schedulesList = (data) => {
    // fazer requisição na API
    const payload = apiGet('/schedule');
    return { type: SCHEDULE_LIST, payload }
};