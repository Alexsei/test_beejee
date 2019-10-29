import React, {Component} from "react";
import {Button, FormControl, InputGroup, Alert, Col, Row } from "react-bootstrap";

export default class Task extends Component {
    constructor(props) {
        super(props);
        this.onClickEdit = this.onClickEdit.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onStatusChange = this.onStatusChange.bind(this);
        this.htmlDecode = this.htmlDecode.bind(this);
        this.onClickcancel = this.onClickcancel.bind(this);
        this.state = {
            auth: !!localStorage.getItem('username'),
            edit: false,
            newStatus: this.props.status===10,
            adminEdit: this.props.status===11,
            newText: this.props.text,
            message: [],
            variant: 'danger',
        }
    }
    htmlDecode (str) {
        let txt = document.createElement('textarea');
        txt.innerHTML = str;
        return txt.value;
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
    onClickcancel(){

        let edit = this.props.edit;
        edit[this.props.index] = false;
        this.props.setTasksEdit(edit);
        this.setState({});

    }

    async onClickSave(){
        if (this.state.auth) {
            const url = "https://uxcandy.com/~shapoval/test-task-backend/v2/edit/"+this.props.id+"/?developer=Alexsei";
            const form = new FormData();
            const newText = this.state.newText;
            const newStatus = this.state.newStatus*10;
            form.append("token", localStorage.getItem('token'));
            form.append("text", newText); //
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
            <div>
                <Row className="mx-3">
                    <Col className="border"
                         md={1}
                    >{this.props.id}</Col>
                    <Col className="border"
                         md={1}
                    >{this.props.username}</Col>
                    <Col className="border"
                         md={2}
                    >{this.props.email}</Col>
                    {this.props.edit[this.props.index] ? (
                        <Col className="border"
                             md={4}
                        ><FormControl value={this.htmlDecode(this.state.newText)}
                                              onChange={this.onTextChange}
                        /></Col>
                    ) :(
                        <Col className="border"
                             md={4}
                        >{this.htmlDecode(this.props.tasks[this.props.index].text)}</Col>
                    )}
                    <Col className="border" md={2}>
                        {this.props.edit[this.props.index] ? (
                            <InputGroup.Prepend onClick={this.onStatusChange}
                                                className=''
                            >
                                <InputGroup.Checkbox checked={this.state.newStatus}
                                                     className=''


                                />
                                {this.state.newStatus ? (
                                    <p className='m-1 '> Выполнено</p>
                                ) : (
                                    <p className='m-1 ' >Не выполнено</p>
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
                    </Col>
                    <Col className="border"
                         md={2}
                    >{this.props.edit[this.props.index] ? (
                        <div className="m-1" >
                            <Button variant="outline-success"
                                    onClick={this.onClickSave}
                            >Сохранить</Button>
                            <Button variant="outline-danger"
                                    onClick={this.onClickcancel}
                            ><strong>X</strong></Button>
                        </div>



                    ) : (
                        this.state.auth &&
                                <Button variant="outline-success"
                                    className="m-1"
                                    onClick={this.onClickEdit}
                            >Изменить</Button>
                    )}



                    </Col>
                </Row>
                {this.state.message.map((value) => (
                    <Row className="mx-3">
                        <Col className="border" >
                            <Alert  variant={this.state.variant}>{value}</Alert>
                        </Col>
                    </Row>
                ))}
            </div>
        );
    }
}
