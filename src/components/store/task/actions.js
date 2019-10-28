export const TASK_CHANGE_ID = 'TASK_CHANGE_ID';
export const TASK_CHANGE_USERNAME = 'TASK_CHANGE_USERNAME';
export const TASK_CHANGE_EMAIL = 'TASK_CHANGE_EMAIL';
export const TASK_CHANGE_TEXT = 'TASK_CHANGE_TEXT';
export const TASK_CHANGE_STATUS = 'TASK_CHANGE_STATUS';


export const  setTaskId = id => ({
    type: TASK_CHANGE_ID,
    payload: id
});
export const  setTaskUserName = username => ({
    type: TASK_CHANGE_USERNAME,
    payload: username
});
export const  setTaskEmail = email => ({
    type: TASK_CHANGE_EMAIL,
    payload: email
});
export const  setTaskText = text => ({
    type: TASK_CHANGE_TEXT,
    payload: text
});
export const  setTaskStatus = status => ({
    type: TASK_CHANGE_STATUS,
    payload: status
});


