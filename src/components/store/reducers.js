import {combineReducers} from "redux";
import {aurhReducer} from "./auth/reducers";
import {tasksReducer} from "./tasks/reducers";
import {taskReducer} from "./task/reducers";




export default combineReducers({
    auth: aurhReducer,
    tasks: tasksReducer,
    task: taskReducer
})