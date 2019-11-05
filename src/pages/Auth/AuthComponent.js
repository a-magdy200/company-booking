import React from 'react'
import { Redirect } from 'react-router-dom';
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import "../../assets/styles/login.css";
import { connect } from 'react-redux';
import { updateInput, login, signup } from "../../redux/actions/authActions";
import {AUTH_INPUT_UPDATE} from "../../redux/types";

const AuthComponent = (props) => {
    const {
        isLoggedIn,
        loading
    } = props;
    if (isLoggedIn) {
        return <Redirect to={'/'} />
    } else {
        return (
            <div className={"container"}>
                { loading ? <div className={"loading"}>Loading...</div> : renderContent(props) }
            </div>
        );
    }
};
const renderContent = props => {
    const {
        login_email, login_password, login_errors,
        signup_email, signup_password, signup_confirm_password, first_name, last_name, signup_errors,
        updateInput, handleLogin, handleSignup, loadCredentials//TODO:remove load credentials
    } = props;
    return (
        <div className="auth-container">
            <LoginForm
                onChange={updateInput}
                email={login_email}
                password={login_password}
                loginHandler={handleLogin}
                errors={login_errors}
                loadCredentials={loadCredentials}//TODO:Remove this line
            />
            <SignupForm
                onChange={updateInput}
                email={signup_email}
                password={signup_password}
                confirm_password={signup_confirm_password}
                first_name={first_name}
                last_name={last_name}
                signUpHandler={handleSignup}
                errors={signup_errors}
            />
        </div>
    )
};
const mapStateToProps = ({auth, user}) => {
    return {...auth, isLoggedIn: user.isLoggedIn};
};
const mapDispatchToProps = dispatch => {
    return {
        updateInput: event => dispatch(updateInput(event)),
        handleLogin: event => dispatch(login(event)),
        handleSignup: event => dispatch(signup(event)),
        loadCredentials: (type) => {
            let email, password;
            if (type === 'client') {
                email = 'Grant78@hotmail.com';
                password = 'RTc8UHjN4LeqezI';
            } else if (type === 'inspector') {
                email = 'Andre85@gmail.com';
                password = 'DLc8eEw6O5ojAZh';
            }

            dispatch({
                type: AUTH_INPUT_UPDATE,
                payload: {
                    name: 'login_email',
                    value: email
                }
            });
            dispatch({
                type: AUTH_INPUT_UPDATE,
                payload: {
                    name: 'login_password',
                    value: password
                }
            });
        }//TODO:Remove From Line 62 Until Here
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AuthComponent);
