import {connect} from "react-redux";

import {
    setTasksEdit,
    setTasksPage,
    setTasksSortDirection,
    setTasksSortField,
    setTasksText,
    setTasksTotalTaskCount
} from "../store/tasks/actions";
import {setAuth} from "../store/auth/actions";

import MenuTasks from "./menuTasks";


const mapStateToProps = state => {
    return {
        auth: state.auth.auth,
        tasks: state.tasks.tasks,
        sort_field: state.tasks.sort_field,
        sort_direction: state.tasks.sort_direction,
        page: state.tasks.page,
        total_task_count: state.tasks.total_task_count

    };
};

const mapDispatchToProps =  {
    setAuth: setAuth,
    setTasksText: setTasksText,
    setTasksSortField: setTasksSortField,
    setTasksSortDirection: setTasksSortDirection,
    setTasksPage: setTasksPage,
    setTasksTotalTaskCount: setTasksTotalTaskCount,
    setTasksEdit: setTasksEdit,



};

export default connect (mapStateToProps, mapDispatchToProps)(MenuTasks)