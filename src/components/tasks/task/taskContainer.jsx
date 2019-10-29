import React, { Component } from "react";
import {connect} from "react-redux";


import Task from "./task";
import {setTasksEdit, setTasksText} from "../../store/tasks/actions";



class TaskContainer extends Component {

    render() {
        return <Task tasks={this.props.tasks}
                     edit={this.props.edit}
                     setTasksText={this.props.setTasksText}
                     setTasksEdit={this.props.setTasksEdit}
                     id={this.props.id}
                     index={this.props.index}
                     email={this.props.email}
                     status={this.props.status}
                     text={this.props.text}
                     username={this.props.username}

        />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        edit: state.tasks.edit,
        tasks: state.tasks.tasks,
        id: ownProps.id,
        index: ownProps.index,
        email: ownProps.email,
        status: ownProps.status,
        text: ownProps.text,
        username: ownProps.username
    };
};

const mapDispatchToProps =  {
    setTasksText: setTasksText,
    setTasksEdit: setTasksEdit
};

export default connect (mapStateToProps, mapDispatchToProps)(TaskContainer)