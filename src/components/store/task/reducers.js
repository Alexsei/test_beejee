import {TASK_CHANGE_EMAIL, TASK_CHANGE_ID, TASK_CHANGE_STATUS, TASK_CHANGE_TEXT, TASK_CHANGE_USERNAME} from "./actions";

const defaultState = {
    id: '',
    username: '',
    email: '',
    text: '',
    status: ''
}

export const taskReducer = (state  = defaultState, action) => {
    switch (action.type) {
        case TASK_CHANGE_ID:
            return {
                ...state,
                id: action.payload
            };
        case TASK_CHANGE_USERNAME:
            return {
                ...state,
                username: action.payload
            };
        case TASK_CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case TASK_CHANGE_TEXT:
            return {
                ...state,
                text: action.payload
            };
        case TASK_CHANGE_STATUS:
            return {
                ...state,
                status: action.payload
            };
        default: return state
    }
}