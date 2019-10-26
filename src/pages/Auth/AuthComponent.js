import React, { Component } from 'react'
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import "../../assets/styles/login.css";
class AuthComponent extends Component {
    constructor(props) {
        super(props);
        this.loginHandler = this.loginHandler.bind(this);
        this.signUpHandler = this.signUpHandler.bind(this);
        this.updateInputs = this.updateInputs.bind(this);
        this.state = {
            login_email: '',
            login_password: '',
            signup_email: '',
            signup_password: '',
            signup_confirm_password: '',
            first_name: '',
            last_name: '',
        };
    }
    loginHandler(event) {
        event.preventDefault();
        const { login_email, login_password } = this.state;
        console.log("login");
    }
    signUpHandler(event) {
        event.preventDefault();
        const {
            signup_email,
            signup_password,
            signup_confirm_password,
            first_name, last_name
        } = this.state;
        console.log("signup");
    }
    updateInputs(val) {
        const { target } = val;
        const name = target.getAttribute("name");
        const value = target.value;
        this.setState({[name]: value});
    }
    render() {
        const {
            login_email, login_password,
            signup_email, signup_password, signup_confirm_password, first_name, last_name
        } = this.state;
        return (
            <div className={"container"}>
                <div className="auth-container">
                    <LoginForm
                        onChange={this.updateInputs}
                        email={login_email}
                        password={login_password}
                        loginHandler={this.loginHandler}
                    />
                    <SignupForm
                        onChange={this.updateInputs}
                        email={signup_email}
                        password={signup_password}
                        confirm_password={signup_confirm_password}
                        first_name={first_name}
                        last_name={last_name}
                        signUpHandler={this.signUpHandler}
                    />
                </div>
            </div>
        )
    }
}
export default AuthComponent;
