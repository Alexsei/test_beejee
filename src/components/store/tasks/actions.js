export const TASKS_CHANGE_TASKS = 'TASKS_CHANGE_TASKS';
export const TASKS_CHANGE_SORT_FIELD = 'TASKS_CHANGE_SORT_FIELD';
export const TASKS_CHANGE_SORT_DIRECTION = 'TASKS_CHANGE_SORT_DIRECTION';
export const TASKS_CHANGE_PAGE = 'TASKS_CHANGE_PAGE';
export const TASKS_CHANGE_TOTAL_TASK_COUNT = 'TASKS_CHANGE_TOTAL_TASK_COUNT';


export const  setTasksText = tasks => ({
    type: TASKS_CHANGE_TASKS,
    payload: tasks
});

export const  setTasksSortField = sort_field => ({
    type: TASKS_CHANGE_SORT_FIELD,
    payload: sort_field
});

export const  setTasksSortDirection = sort_direction => ({
    type: TASKS_CHANGE_SORT_DIRECTION,
    payload: sort_direction
});

export const  setTasksPage = page => ({
    type: TASKS_CHANGE_PAGE,
    payload: page
});

export const  setTasksTotalTaskCount = total_task_count => ({
    type: TASKS_CHANGE_TOTAL_TASK_COUNT,
    payload: total_task_count
});


