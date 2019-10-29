import React, {Component} from "react";
import {Alert, Button, ButtonToolbar, FormControl, InputGroup} from "react-bootstrap";


export default class CreateTask extends Component {
    constructor(props) {
        super(props);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.loadTasks = this.loadTasks.bind(this);
        this.state = {
            message: [],
            status: false,
            variant: 'danger'
        };
    }


    async loadTasks(){
        const url = "https://uxcandy.com/~shapoval/test-task-backend/v2/create/?developer=Alexsei";
        const form = new FormData();
        form.append("username", this.props.username);
        form.append("email", this.props.email);
        form.append("text", escape(this.props.text));
        console.log(this.props.text);
        const options  = {
            method: 'POST',
            body: form
        };
        const response = await fetch(url, options).then(response => response.json());
        //console.log("message", response.message);
        let message = [];
        for (let key in response.message) {
            message.push(key + ": " + response.message[key])
        }
        this.setState({ message: message});
        this.setState({ status: response.status});
        switch (response.status) {
            case "ok":
                 this.setState({    variant: 'success'});
                setTimeout(()=>(window.location.assign('/')),2000)
                break;
            case "error":
                this.setState({    variant: 'danger'});
                break;
            default:
        }
        //console.log(response);
    }

    onUserNameChange(event) {
        this.props.setTaskUserName(event.target.value)
    }
    onEmailChange(event) {
        this.props.setTaskEmail(event.target.value)
    }
    onTextChange(event) {
        this.props.setTaskText(event.target.value)
    }
    onCreateTask() {

    }





    render() {
        return (
            <div className="m-3">
                <h4> Создать новый Task </h4>
                <InputGroup className="mb-3 ">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="InputGroup_text">UserName</InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl  placeholder="Введите UserName"
                                  value={this.props.username}
                                  onChange={this.onUserNameChange}

                    />
                </InputGroup >
                <InputGroup className="mb-3 ">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="InputGroup_text">EMail</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Введите EMail"
                                 value={this.props.email}
                                 onChange={this.onEmailChange}
                    />
                </InputGroup>
                <InputGroup className="mb-3 ">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="InputGroup_text">Text</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl placeholder="Введите Text"
                                 value={this.props.text}
                                 onChange={this.onTextChange}
                    />
                </InputGroup>
                <ButtonToolbar>
                    <Button className="m-1"
                            variant="outline-success"
                            onClick={this.loadTasks}
                    >Записать</Button>
                    <Button className="m-1" href="/" variant="outline-danger">Отмена</Button>
                </ButtonToolbar>
                <div className='m-4'>
                    {this.state.message.map((value) => (
                    <Alert  variant={this.state.variant}>{value}</Alert>
                    ))}
                </div>

            </div>
        );
    }
}