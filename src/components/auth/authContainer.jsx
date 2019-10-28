import React, { Component } from "react";
import {connect} from "react-redux";

import {setLoginText, setPasswordText} from "../store/auth/actions";
import Auth from './auth'



class AuthContainer extends Component {
    render() {
        return <Auth login={this.props.login}
                     password={this.props.password}
                     setLoginText={this.props.setLoginText}
                     setPasswordText={this.props.setPasswordText}
        />
    }
}

const mapStateToProps = state => {
    return {
        login: state.auth.login,
        password: state.auth.password,
    };
}

const mapDispatchToProps =  {
    setLoginText: setLoginText,
    setPasswordText: setPasswordText
};

export default connect (mapStateToProps, mapDispatchToProps)(AuthContainer)