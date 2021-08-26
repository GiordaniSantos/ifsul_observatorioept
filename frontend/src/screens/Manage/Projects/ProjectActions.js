import { apiPost, apiGet, apiPut } from '../../../helpers/api';

export const PROJECT_CREATE = 'PROJECT_CREATE';
export const PROJECT_LIST = 'PROJECT_LIST';
export const PROJECT_UPDATE = 'PROJECT_UPDATE';
export const PROJECT_GET = 'PROJECT_GET';

export const projectCreate = (data) => {
    // fazer requisição na API
    const payload = apiPost('/project', data);
    return { type: PROJECT_CREATE, payload }
};

export const projectUpdate = (id, data) => {
    // fazer requisição na API
    const payload = apiPut(`/project/${id}`, data);
    return { type: PROJECT_UPDATE, payload }
};

export const projectGet = (id) => {
       const payload = apiGet(`/project/${id}`);
       return { type: PROJECT_GET, payload }
}

export const projectList = (data) => {
    // fazer requisição na API
    const payload = apiGet('/project');
    return { type: PROJECT_LIST, payload }
};