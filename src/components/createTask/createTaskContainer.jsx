import {connect} from "react-redux";
import CreateTask from "./createTask";
import {setTaskEmail, setTaskId, setTaskStatus, setTaskText, setTaskUserName} from "../store/task/actions";

const mapStateToProps = state => {
    return {
        id: state.task.id,
        username: state.task.username,
        email: state.task.email,
        text: state.task.text,
        status: state.task.status,
    };
}

const mapDispatchToProps = {
    setTaskId: setTaskId,
    setTaskUserName: setTaskUserName,
    setTaskEmail: setTaskEmail,
    setTaskText: setTaskText,
    setTaskStatus: setTaskStatus,

};

export default connect (mapStateToProps, mapDispatchToProps)(CreateTask)