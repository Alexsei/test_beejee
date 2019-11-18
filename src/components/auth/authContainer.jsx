
import {connect} from "react-redux";

import {setLoginText, setPasswordText} from "../store/auth/actions";
import Auth from './auth'


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

export default connect (mapStateToProps, mapDispatchToProps)(Auth)