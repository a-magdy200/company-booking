import {
    AUTH_INPUT_UPDATE,
    LOGIN,
    SIGNUP,
    LOGIN_ERRORS,
    SIGNUP_ERRORS,
    LOADING
} from "../types";
import axios from 'axios';
import api_url from "../../shared/api_url";

export const updateInput = ({ target }) => {
    const name = target.getAttribute("name");
    const value = target.value;
    return {
        type: AUTH_INPUT_UPDATE,
        payload: {
            name, value
        }
    };
};

const loginAction = () => {
    return {
        type: LOGIN
    };
};
const loginErrors = errors => {
    return {
        type: LOGIN_ERRORS,
        payload: {errors}
    };
};
const signupAction = () => {
    return {
        type: SIGNUP
    };
};
const signupErrors = errors => {
    return {
        type: SIGNUP_ERRORS,
        payload: {errors}
    };
};
const formLoading = () => {
    return {
        type: LOADING
    };
};
export const login = (event) => {
    event.preventDefault();
    return (dispatch, getState) => {
        const state = getState();
        const { auth } = state;
        const { login_email, login_password } = auth;
        dispatch(formLoading());
        axios.post(api_url.login_url, {
            email: login_email,
            password: login_password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( response => {
            console.log("Login Response");
            console.log(response);
            dispatch(loginAction())
        }).catch( errors => {
            console.log("Login Error");
            console.log(errors);
            dispatch(loginErrors(errors));
        });
    };
};
export const signup = (event) => {
    event.preventDefault();
    return (dispatch, getState) => {
        const state = getState();
        const { auth } = state;
        const { signup_email, signup_password, first_name, last_name } = auth;
        dispatch(formLoading());
        axios.post(api_url.signup_url, {
            email: signup_email,
            password: signup_password,
            first_name,
            last_name
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( response => {
            console.log("SignUp Response");
            console.log(response);
            dispatch(signupAction())
        }).catch( errors => {
            console.log("SignUp Error");
            console.log(errors);
            dispatch(signupErrors(errors));
        });
    };
};
