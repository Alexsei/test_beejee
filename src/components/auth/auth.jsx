import React, { Component } from "react";
import './auth.css';
import {Button, InputGroup, FormControl, Alert,} from 'react-bootstrap';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onAuth = this.onAuth.bind(this);
        this.state = {
            message: [],
            status: false,
            variant: 'danger'
        };
    }
    onLoginChange(event) {
        this.props.setLoginText(event.target.value)
    }
    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value)
    }
    async onAuth() {
        const url = "https://uxcandy.com/~shapoval/test-task-backend/v2/login/?developer=Alexsei";
        const form = new FormData();
        form.append("username", this.props.login);
        form.append("password", this.props.password);
        const options  = {
            method: 'POST',
            body: form
        };
        const response = await fetch(url, options).then(response => response.json());
        console.log("message", response);
        let message = [];
        for (let key in response.message) {
            message.push(key + ": " + response.message[key])
        }
        this.setState({ status: response.status});
        switch (response.status) {
            case "ok":
                this.setState({    variant: 'success'});
                this.setState({ message: ['Вы авторизованны ']});
                localStorage.setItem('username', this.props.login);
                localStorage.setItem('token', response.message.token);
                localStorage.setItem('tokenTime', Date.now()+36*24*100000);
                setTimeout(()=>(window.location.assign('/')),1000)
                break;
            case "error":
                this.setState({    variant: 'danger'});
                this.setState({ message: message});
                break;
            default:
        }

    }
    render() {
        return (
            <div className="Login_div m-3 m-auto">
                <h4> Введите логин и пароль </h4>

                <InputGroup className="mb-3 ">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="InputGroup_text">Логин</InputGroup.Text>
                    </InputGroup.Prepend>

                    <FormControl  placeholder="Введите логин"
                                  name='login'
                                  value={this.props.login}
                                  onChange={this.onLoginChange}

                    />
                </InputGroup >
                <InputGroup className="mb-3 ">
                    <InputGroup.Prepend>
                        <InputGroup.Text className="InputGroup_text">Пароль</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl type="password"
                                 placeholder="Введите пароль"
                                 name='password'
                                 value={this.props.password}
                                 onChange={this.onPasswordChange}
                    />
                </InputGroup>
                <Button variant="outline-success"
                        className="m-1"
                        onClick={this.onAuth}
                >Войти</Button>
                <Button variant="outline-success"
                        className="m-1"
                        href="/"
                >Отмена</Button>
                <div className='m-4'>
                    {this.state.message.map((value) => (
                        <Alert  variant={this.state.variant}>{value}</Alert>
                    ))}
                </div>
            </div>
        );
    }
}

