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
            status: this.props.status===10,
            text: this.props.text,
            message: [],
            variant: 'danger',
        }
    }
    onClickEdit(){
        if (this.state.auth) {
            this.setState({
                newText: this.props.text,
                newStatus: this.props.status===10,
                edit: true
            })
        }
    }
    async onClickSave(){
        if (this.state.auth) {
            const url = "https://uxcandy.com/~shapoval/test-task-backend/v2/edit/"+this.props.id+"/?developer=Alexsei";
            const form = new FormData();

            form.append("token", localStorage.getItem('token'));
            form.append("text", this.state.newText);
            form.append("status", (this.state.newStatus*10));
            const options  = {
                method: 'POST',
                body: form
            };

            console.log(this.state.newText, this.state.newStatus*10);
            const response = await fetch(url, options).then(response => response.json());
            console.log(response);
            let message = [];
            for (let key in response.message) {
                message.push(key + ": " + response.message[key])
            }
            switch (response.status) {
                case "ok":
                    this.setState({
                        text: this.state.newText,
                        status: this.state.newStatus,
                    })

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
                {this.state.edit ? (
                    <td><FormControl value={this.state.newText}
                                     onChange={this.onTextChange}
                    /></td>
                ) :(
                    <td>{this.props.text}</td>
                )}
                <td >
                    {this.state.edit ? (
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
                            <InputGroup.Checkbox checked={this.props.status===10}/>
                            {this.props.status===10 ? (
                                <p className='m-1 '> Выполнена</p>
                            ) : (
                                <p className='m-1 ' >Не выполнена</p>
                            )}
                        </InputGroup.Prepend>
                    )


                    }

                </td>
                {this.state.edit ? (

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
