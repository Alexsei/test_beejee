import {AUTH_CHANGE_AUTH, AUTH_CHANGE_LOGIN_TEXT, AUTH_CHANGE_PASSWORD_TEXT} from "./actions";

const defaultState = {
    login: '',
    password: '',
    auth: false,
    token: ''
}

export const aurhReducer = (state  = defaultState, action) => {
    switch (action.type) {
        case AUTH_CHANGE_LOGIN_TEXT:
            return {
                ...state,
                login: action.payload
            };
        case AUTH_CHANGE_PASSWORD_TEXT:
            return {
                ...state,
                password: action.payload
            };
        case AUTH_CHANGE_AUTH:
            return {
                ...state,
                auth: action.payload
            };
        default: return state
    }
}