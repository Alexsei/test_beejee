export const AUTH_CHANGE_LOGIN_TEXT = 'AUTH_CHANGE_LOGIN_TEXT';
export const AUTH_CHANGE_PASSWORD_TEXT = 'AUTH_CHANGE_PASSWORD_TEXT';
export const AUTH_CHANGE_AUTH = 'AUTH_CHANGE_AUTH';
export const AUTH_CHANGE_TOKEN = 'AUTH_CHANGE_TOKEN';

export const  setLoginText = login => ({
    type: AUTH_CHANGE_LOGIN_TEXT,
    payload: login
});

export const setPasswordText = password =>({
    type: AUTH_CHANGE_PASSWORD_TEXT,
    payload: password
})

export const setAuth = auth =>({
    type: AUTH_CHANGE_AUTH,
    payload: auth
})