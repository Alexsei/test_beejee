import React, {Component} from "react";
import {Button, FormControl, InputGroup, Alert} from "react-bootstrap";

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);

        this.state = {
            auth: !!localStorage.getItem('username'),
            edit: false,
            newStatus: this.props.status===10,
            newText: this.props.text,
            message: [],
            variant: 'danger',
        }
    }
    onClickEdit(){
        if (this.state.auth) {
            let edit = this.props.edit;
            edit[this.props.index] = true;
            this.props.setTasksEdit(edit);
            this.setState({
                newText: this.props.tasks[this.props.index].text,
                newStatus: this.props.tasks[this.props.index].status===10,
            })
        }
    }
    async onClickSave(){
        if (this.state.auth) {
            const url = "https://uxcandy.com/~shapoval/test-task-backend/v2/edit/"+this.props.id+"/?developer=Alexsei";
            const form = new FormData();
            const newText = this.state.newText;
            const newStatus = this.state.newStatus*10;
            form.append("token", localStorage.getItem('token'));
            form.append("text", escape(newText));
            form.append("status", (newStatus));
            const options  = {
                method: 'POST',
                body: form
            };

            console.log(newText, newStatus);
            const response = await fetch(url, options).then(response => response.json());
            console.log(response);
            let message = [];
            for (let key in response.message) {
                message.push(key + ": " + response.message[key])
            }
            switch (response.status) {
                case "ok":
                    let edit = this.props.edit;
                    edit[this.props.index] = false;
                    const tasks = this.props.tasks;
                    tasks[this.props.index] = {
                        id: this.props.id,
                        username: this.props.username,
                        email: this.props.email,
                        text: newText,
                        status: newStatus
                    };
                    console.log(this.props.tasks, tasks);
                    this.props.setTasksText(tasks);
                    this.props.setTasksEdit(edit);
                    break;
                case "error":
                    this.setState({  variant: 'danger'});
                    this.setState({ message: message});
                    break;
                default:
            }


            this.setState({
                edit: false
            })
        }
    }
    onTextChange(event) {
        this.setState({
            newText: event.target.value
        })
    }
    onStatusChange(event) {
        this.setState({
            newStatus: !this.state.newStatus
        })
    }
    render() {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.username}</td>
                <td>{this.props.email}</td>
                {this.props.edit[this.props.index] ? (
                    <td><FormControl value={unescape(this.state.newText)}
                                     onChange={this.onTextChange}
                    /></td>
                ) :(
                    <td>{unescape(this.props.tasks[this.props.index].text)}</td>
                )}
                <td >
                    {this.props.edit[this.props.index] ? (
                        <InputGroup.Prepend onClick={this.onStatusChange}
                                            className=''
                        >
                            <InputGroup.Checkbox checked={this.state.newStatus}
                                                 className=''


                            />
                            {this.state.newStatus ? (
                                <p className='m-1 '> Выполнена</p>
                            ) : (
                                <p className='m-1 ' >Не выполнена</p>
                            )}
                        </InputGroup.Prepend>
                    ) :(
                        <InputGroup.Prepend >
                            <InputGroup.Checkbox checked={this.props.tasks[this.props.index].status===10}/>
                            {this.props.tasks[this.props.index].status===10 ? (
                                <p className='m-1 '> Выполнена</p>
                            ) : (
                                <p className='m-1 ' >Не выполнена</p>
                            )}
                        </InputGroup.Prepend>
                    )


                    }

                </td>
                {this.props.edit[this.props.index] ? (

                    <td><Button variant="outline-success"
                                className="m-1"
                                onClick={this.onClickSave}
                    >Сохранить</Button></td>
                ) : (
                    <td>
                        {this.state.auth &&
                        <Button variant="outline-success"
                                className="m-1"
                                onClick={this.onClickEdit}
                        >Изменить</Button>
                        }
                    </td>
                )}
                {this.state.message.map((value) => (
                    <Alert  variant={this.state.variant}>{value}</Alert>
                ))}

            </tr>

        );
    }
}
