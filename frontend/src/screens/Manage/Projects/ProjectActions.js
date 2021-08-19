import { apiPost, apiGet } from '../../../helpers/api';

export const PROJECT_CREATE = 'PROJECT_CREATE';
export const PROJECT_LIST = 'PROJECT_LIST';

export const projectCreate = (data) => {
    // fazer requisição na API
    const payload = apiPost('/project', data);
    return { type: PROJECT_CREATE, payload }
};

export const projectList = (data) => {
    // fazer requisição na API
    const payload = apiGet('/project');
    return { type: PROJECT_LIST, payload }
};