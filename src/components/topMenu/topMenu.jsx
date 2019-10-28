import React, { Component } from "react";
import {Button, Navbar} from "react-bootstrap";
import './topMenu.css'



export default class TopMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: localStorage.getItem('username'),
            token: localStorage.getItem('token'),
            tokenTime: new Date(Number(localStorage.getItem('tokenTime'))).toLocaleString()
        }
    }

    render() {
        return (
            <div className="topMenu_div m-2">
                {this.state.username &&
                    <TopMenuAuthTrue username={this.state.username}
                                     tokenTime={this.state.tokenTime}

                    />
                }
                {!this.state.username &&
                <TopMenuAuthFalse/>
                }

            </div>
        );
    }
}

 class TopMenuAuthTrue extends Component {
     constructor(props) {
         super(props);
         this.onClose = this.onClose.bind(this);
     }

    onClose() {
        localStorage.removeItem('username');
        localStorage.removeItem('token');
        localStorage.removeItem('tokenTime');
        setTimeout(()=>(window.location.assign('/')),0)
    }
    render() {
        return (
            <div className="m-3 ">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand >Вы авторизована как: {this.props.username}</Navbar.Brand>
                    <Navbar.Brand >|  Token действителен до: {this.props.tokenTime} </Navbar.Brand>
                    <Button className="m-1"
                            variant="outline-success"
                            onClick={this.onClose}
                    >Выйти </Button>
                </Navbar>
            </div>
        );
    }
}
class TopMenuAuthFalse extends Component {

    render() {
        return (
            <div className="m-3">
                <Button className="m-1"
                                     variant="outline-success"
                                     href="/auth"
                >Авторизация </Button>

            </div>
        );
    }
}