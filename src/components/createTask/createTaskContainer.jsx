import React, { Component } from "react";
import {connect} from "react-redux";
import CreateTask from "./createTask";
import {setTaskEmail, setTaskId, setTaskStatus, setTaskText, setTaskUserName} from "../store/task/actions";

class createTaskContainer extends Component {
    render() {
        return <CreateTask id={this.props.id}
                           username={this.props.username}
                           email={this.props.email}
                           text={this.props.text}
                           status={this.props.status}
                           setTaskId={this.props.setTaskId}
                           setTaskUserName={this.props.setTaskUserName}
                           setTaskEmail={this.props.setTaskEmail}
                           setTaskText={this.props.setTaskText}
                           setTaskStatus={this.props.setTaskStatus}
        />
    }
}

const mapStateToProps = state => {
    return {
        id: state.task.id,
        username: state.task.username,
        email: state.task.email,
        text: state.task.text,
        status: state.task.status,
    };
}

const mapDispatchToProps =  {
    setTaskId: setTaskId,
    setTaskUserName: setTaskUserName,
    setTaskEmail: setTaskEmail,
    setTaskText: setTaskText,
    setTaskStatus: setTaskStatus,

};

export default connect (mapStateToProps, mapDispatchToProps)(createTaskContainer)