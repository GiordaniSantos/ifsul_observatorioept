import { apiGet } from '../../../helpers/api';

export const MEMBERS_LIST = 'MEMBERS_LIST';

export const membersList = () => {
    const payload = apiGet('/members');
    return { type: MEMBERS_LIST, payload }
};

export const membersSearch = (termo) => {
    const payload = apiGet('/members/pesquisar?termo=' + termo);
    return { type: MEMBERS_LIST, payload }
};