import {
    AUTH_INPUT_UPDATE,
    LOGIN,
    SIGNUP,
    LOGIN_ERRORS,
    SIGNUP_ERRORS,
    LOADING
} from "../types";
import axios from 'axios';
import { server_url, api_url } from "../../shared/api_url";
import {setUser} from "./userActions";

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
        axios.post(server_url + api_url.login_url, {
            email: login_email,
            password: login_password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then( response => {
            const { data } = response;
            const { user, token, error } = data;
            if (error) {
                dispatch(loginErrors(error));
            } else {
                dispatch(loginAction());
                dispatch(setUser(user, token));
            }
        }).catch( errors => {
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
        axios.post(server_url + api_url.signup_url, {
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
            const { data } = response;
            const { user, token, error } = data;
            if (error) {
                dispatch(signupErrors(error));
            } else {
                dispatch(signupAction());
                dispatch(setUser(user, token));
            }
        }).catch( errors => {
            console.log("SignUp Error");
            console.log(errors);
            dispatch(signupErrors(errors));
        });
    };
};
