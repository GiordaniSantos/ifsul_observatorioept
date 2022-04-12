import { apiPost } from '../../helpers/api';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const signIn = (data) => {
    const payload = apiPost('/auth/sign-in', data);

    return { type: SIGN_IN, payload }
};

export const signOut = () => {

    return { type: SIGN_OUT, payload: {}}
};

