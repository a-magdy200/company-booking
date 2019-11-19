import axios from 'axios';
import {
    CHANGE_AUTH_LAYOUT,
    LOGIN_INPUT_UPDATE,
    REGISTER_INPUT_UPDATE,
    SUBMIT_LOGIN_EMAIL,
    SUBMIT_LOGIN_PASSWORD,
    SUBMIT_REGISTER_FORM,
    FORGET_PASSWORD_INPUT_UPDATE,
    SUBMIT_FORGET_PASSWORD_EMAIL,
    AUTH_LAYOUT_LOADING,
    AUTH_ERROR
} from "../types";
import {api_url, server_url} from "../../shared/api_url";
import {setUser} from "./userActions";
const headersConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
};
const auth_error = error => {
    return {
        type: AUTH_ERROR,
        payload: { error }
    };
};
export const login_input_update = event => {
    const { name, value } = event.target;
    return {
        type: LOGIN_INPUT_UPDATE,
        payload: { name, value },
    };
};

const submit_login_email_success = () => {
    return {
        type: SUBMIT_LOGIN_EMAIL,
    };
};
const auth_layout_loading = () => {
    return {
        type: AUTH_LAYOUT_LOADING,
    };
};

export const submit_login_email = event => {
    event.preventDefault();
    return (dispatch, getState) => {
        const { login } = getState();

        dispatch(auth_layout_loading());
            axios.post(server_url + api_url.check_email, {
                email: login.login.email
            }, headersConfig)
                .then( ({ data }) => {
                    const { emailExists } = data;
                    if ( emailExists ) {
                        dispatch(submit_login_email_success());
                    } else {
                        dispatch(auth_error("Email Does Not Exist."));
                    }

                })
                .catch( err => {
                    console.log(err);
                    dispatch(auth_error(err));
                });
    };
};

const submit_login_password_success = () => {
    return {
        type: SUBMIT_LOGIN_PASSWORD,
    };
};

export const submit_login_password = event => {
    event.preventDefault();
    return (dispatch, getState) => {
        const { login } = getState();
        const { email, password } = login.login;
        dispatch(auth_layout_loading());
        axios.post(server_url + api_url.check_password, {
            email, password
        }, headersConfig)
            .then( ({ data }) => {
                const { error } = data;
                if (error) {
                    return dispatch(auth_error(error));
                } else {
                    dispatch(submit_login_password_success());
                    const { user, token } = data;
                    dispatch(setUser(user, token));
                }
            }).catch( error => dispatch(auth_error(error)));
    };
};

export const register_input_update = event => {
    const { name, value } = event.target;
    return {
        type: REGISTER_INPUT_UPDATE,
        payload: { name, value },
    };
};

const submit_register_success = () => {
    return {
        type: SUBMIT_REGISTER_FORM,
    };
};

export const submit_register_form = event => {
    event.preventDefault();
    return (dispatch, getState) => {
        const { login } = getState();
        const { register } = login;
        const { email, password, confirm_password } = register;
        dispatch(auth_layout_loading());
        if (password !== confirm_password) {
            dispatch(auth_error("Password doesn't match."));
            return null;
        }
        axios.post(server_url + api_url.signup, {
            email, password
        }).then( ({ data }) => {
            console.log(data);
            const { error } = data;
            if ( error ) {
                dispatch(auth_error(error));
            } else {
                const { user, token } = data;
                dispatch(setUser(user, token));
                dispatch(submit_register_success());
            }
        }).catch( error => {
            dispatch(auth_error(error));
        });
    };
};

export const change_auth_layout = (layout = 'login') => {
    return {
        type: CHANGE_AUTH_LAYOUT,
        payload: { layout }
    };
};

export const forget_password_email_update = value => {
    return {
        type: FORGET_PASSWORD_INPUT_UPDATE,
        payload: { value }
    };
};

const forget_password_email_submit_success = () => {
    return {
        type: SUBMIT_FORGET_PASSWORD_EMAIL
    };
};

export const forget_password_email_submit = () => {
    return {
        type: SUBMIT_FORGET_PASSWORD_EMAIL
    };
};
