import React, { Component } from "react";
import {connect} from "react-redux";

import {
    setTasksPage,
    setTasksSortDirection,
    setTasksSortField,
    setTasksText,
    setTasksTotalTaskCount
} from "../store/tasks/actions";
import {setAuth} from "../store/auth/actions";

import MenuTasks from "./menuTasks";




class MenuTasksContainer extends Component {


    render() {
        return <MenuTasks
            auth={this.props.auth}
            tasks={this.props.tasks}
            sort_field = {this.props.sort_field}
            sort_direction = {this.props.sort_direction}
            page = {this.props.page}
            total_task_count = {this.props.total_task_count}

            setTasksText = {this.props.setTasksText}
            setTasksSortField = {this.props.setTasksSortField}
            setTasksSortDirection = {this.props.setTasksSortDirection}
            setTasksPage = {this.props.setTasksPage}
            setTasksTotalTaskCount = {this.props.setTasksTotalTaskCount}

        />
    }
}

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
    setTasksTotalTaskCount: setTasksTotalTaskCount


};

export default connect (mapStateToProps, mapDispatchToProps)(MenuTasksContainer)