import {connect} from "react-redux";

import {
    setTasksPage,
    setTasksSortDirection,
    setTasksSortField,
    setTasksText,
    setTasksTotalTaskCount
} from "../store/tasks/actions";
import Tasks from "./tasks";


const mapStateToProps = state => {
    return {
        tasks: state.tasks.tasks,
        sort_field: state.tasks.sort_field,
        sort_direction: state.tasks.sort_direction,
        page: state.tasks.page,
        total_task_count: state.tasks.total_task_count
    };
};

const mapDispatchToProps =  {
    setTasksText: setTasksText,
    setTasksSortField: setTasksSortField,
    setTasksSortDirection: setTasksSortDirection,
    setTasksPage: setTasksPage,
    setTasksTotalTaskCount: setTasksTotalTaskCount


};

export default connect (mapStateToProps, mapDispatchToProps)(Tasks)