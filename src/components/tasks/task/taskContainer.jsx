import {connect} from "react-redux";


import Task from "./task";
import {setTasksEdit, setTasksText} from "../../store/tasks/actions";



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

export default connect (mapStateToProps, mapDispatchToProps)(Task)