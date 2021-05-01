export const SIGN_IN = 'SIGN_IN';

export const signIn = (data) => {
    // fazer requisição na API
    return { type: SIGN_IN, payload: data }
};