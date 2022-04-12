import { apiPost, apiPut, apiGet } from '../../../helpers/api';

export const CURRICULUM_CREATE = 'CURRICULUM_CREATE';
export const CURRICULUM_GET = 'CURRICULUM_GET';
export const CURRICULUM_LIST = 'CURRICULUM_LIST';
export const CURRICULUM_UPDATE = 'CURRICULUM_UPDATE';

export const curriculumCreate = (data) => {
    // fazer requisição na API
    const payload = apiPost('/curriculum', data);
    return { type: CURRICULUM_CREATE, payload }
};

export const curriculumUpdate = (id, data) => {
    // fazer requisição na API
    const payload = apiPut(`/curriculum/${id}`, data);
    return { type: CURRICULUM_UPDATE, payload }
};

export const curriculumGet = (id) => {
    const payload = apiGet(`/curriculum/${id}`);
    return { type: CURRICULUM_GET, payload }
}

export const curriculumList = (data) => {
    // fazer requisição na API
    const payload = apiGet('/curriculum');
    return { type: CURRICULUM_LIST, payload }
};