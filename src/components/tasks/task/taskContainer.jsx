import React, { Component } from "react";
import {connect} from "react-redux";


import Task from "./task";
import {setTasksText} from "../../store/tasks/actions";



class TaskContainer extends Component {
    render() {
        return <Task tasks={this.props.tasks}
                     setTasksText={this.props.setTasksText}
                     id={this.props.id}
                     index={this.props.index}
                     status={this.props.status}
                     text={this.props.text}
                     username={this.props.username}

        />
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        tasks: state.tasks.tasks,
        id: ownProps.id,
        index: ownProps.index,
        status: ownProps.status,
        text: ownProps.text,
        username: ownProps.username
    };
};

const mapDispatchToProps =  {
    setTasksText: setTasksText,
};

export default connect (mapStateToProps, mapDispatchToProps)(TaskContainer)