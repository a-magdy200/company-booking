import React, { Component } from 'react'
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import "../../assets/styles/login.css";
import { connect } from 'react-redux';
import { updateInput, login, signup } from "../../redux/actions/authActions";

const AuthComponent = (props) => {
    const {
        login_email, login_password,
        signup_email, signup_password, signup_confirm_password, first_name, last_name,
        updateInput, handleLogin, handleSignup
    } = props;
    return (
        <div className={"container"}>
            <div className="auth-container">
                <LoginForm
                    onChange={updateInput}
                    email={login_email}
                    password={login_password}
                    loginHandler={handleLogin}
                />
                <SignupForm
                    onChange={updateInput}
                    email={signup_email}
                    password={signup_password}
                    confirm_password={signup_confirm_password}
                    first_name={first_name}
                    last_name={last_name}
                    signUpHandler={handleSignup}
                />
            </div>
        </div>
    );
};
const mapStateToProps = ({auth}) => {
    console.log(auth);
    return {...auth}
};
const mapDispatchToProps = dispatch => {
    return {
        updateInput: input => dispatch(updateInput(input)),
        handleLogin: (event) => dispatch(login(event)),
        handleSignup: (event) => dispatch(signup(event))
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
