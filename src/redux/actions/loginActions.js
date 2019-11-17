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
        dispatch(auth_layout_loading());
        setTimeout( () => {
            dispatch(submit_login_email_success());
        }, 300);
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
        dispatch(auth_layout_loading());
        setTimeout( () => {
            dispatch(submit_login_password_success());
        }, 300);
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
        dispatch(auth_layout_loading());
        setTimeout( () => {
            dispatch(change_auth_layout('login'));
            dispatch(submit_register_success());
        }, 300);
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
