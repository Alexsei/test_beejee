import {
    TASKS_CHANGE_PAGE,
    TASKS_CHANGE_SORT_DIRECTION,
    TASKS_CHANGE_SORT_FIELD,
    TASKS_CHANGE_TASKS,
    TASKS_CHANGE_TOTAL_TASK_COUNT
} from "./actions";


const defaultState = {
    tasks: [],              // tasks (список задач на странице)
    sort_field: 'id',       // sort_field (id | username | email | status) - поле, по которому выполняется сортировка
    sort_direction: 'asc',  // sort_direction (asc | desc) - направление сортировки
    page: 1,                 // page - номер страницы для пагинации
    total_task_count: false     // total_task_count (общее количество задач)
}

export const tasksReducer = (state  = defaultState, action) => {
    switch (action.type) {
        case TASKS_CHANGE_TASKS:
            return {
                ...state,
                tasks: action.payload
            };
        case TASKS_CHANGE_SORT_FIELD:
            return {
                ...state,
                sort_field: action.payload
            };
        case TASKS_CHANGE_SORT_DIRECTION:
            return {
                ...state,
                sort_direction: action.payload
            };
        case TASKS_CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            };
        case TASKS_CHANGE_TOTAL_TASK_COUNT:
            return {
                ...state,
                total_task_count: action.payload
            };
        default: return state
    }
}