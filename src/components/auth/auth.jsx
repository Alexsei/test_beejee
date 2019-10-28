import React, { Component } from "react";
import './auth.css';
import { Button , InputGroup, FormControl,  } from 'react-bootstrap';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.onLoginChange = this.onLoginChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this)
    }
    onLoginChange(event) {
        this.props.setLoginText(event.target.value)
    }
    onPasswordChange(event) {
        this.props.setPasswordText(event.target.value)
    }
    render() {
        return (
            <div className="Login_div m-3">
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
                >Войти</Button>
                <Button variant="outline-success"
                        className="m-1"
                        href="/"
                >Отмена</Button>
            </div>
        );
    }
}

