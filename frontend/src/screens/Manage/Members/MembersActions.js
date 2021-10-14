import { apiPost, apiGet, apiPut } from '../../../helpers/api';

export const MEMBERS_LIST = 'MEMBERS_LIST';

export const membersList = (data) => {
    const payload = apiGet('/members');
    return { type: MEMBERS_LIST, payload }
};