import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from "./Components/LoginComponent";
import PasswordComponent from "./Components/PasswordComponent";
import "../../assets/styles/login.css";
import RegisterComponent from "./Components/RegisterComponent";

const NewLoginComponent = ({ layout, emailValid, error }) => {
    return <div className={'auth-container'}>
        <div className="auth-box">
            <div className="auth-heading">
                <span className="logo">L</span>
                <span className="company">Company</span>
            </div>
            { renderErrors(error) }
            { renderLayout( layout, emailValid ) }
        </div>
    </div>
};
const renderErrors = error => {

    if (!error || error === '') return null;

    if (typeof error === 'string') return <div className={'auth-error'}>{error}</div>;

    if (typeof error === 'object') return error.map( err => <div className={'auth-error'}>{ err }</div>);

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
    const { layout, error } = login;
    return {
        layout, error,
        emailValid: login.login.emailValid
    };
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(NewLoginComponent);
