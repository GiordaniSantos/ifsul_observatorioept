import { apiGet } from '../../../helpers/api';

const PRACTICES_LIST   = 'PRACTICES_LIST';

export const practicesList = () => {
    const payload = apiGet('/practices');
    return { type: PRACTICES_LIST, payload }
};
