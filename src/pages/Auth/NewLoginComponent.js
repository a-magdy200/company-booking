import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from "./LoginComponent";
import PasswordComponent from "./PasswordComponent";
import "../../assets/styles/login.css";
import RegisterComponent from "./RegisterComponent";

const NewLoginComponent = ({ layout, emailValid }) => {
    return <div className={'auth-container'}>
        <div className="auth-box">
            <div className="auth-heading">
                <span className="logo">L</span>
                <span className="company">Company</span>
            </div>
            { renderLayout( layout, emailValid ) }
        </div>
    </div>
};
const renderLayout = ( layout, emailValid) => {
    switch (layout) {
        case 'login':
            return <LoginComponent/>;
        case 'register':
            return <RegisterComponent/>;
        case 'password':
            if (!emailValid) return <LoginComponent/>;
            return <PasswordComponent/>;
        case 'forgot_password':
            return null;
        default:
            return <LoginComponent/>;
    }
};
const mapStateToProps = ({ login }) => {
    const { layout } = login;
    return { layout, emailValid: login.login.emailValid };
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(NewLoginComponent);
