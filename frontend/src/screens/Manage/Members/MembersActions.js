import { apiGet } from '../../../helpers/api';

const MEMBERS_LIST   = 'MEMBERS_LIST';
const MEMBERS_SEARCH = 'MEMBERS_SEARCH';

export const membersList = () => {
    const payload = apiGet('/members');
    return { type: MEMBERS_LIST, payload }
};

export const membersSearch = (termo) => {
    const payload = apiGet('/members/pesquisar?termo=' + termo);
    return { type: MEMBERS_SEARCH, payload }
};