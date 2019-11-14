import {
    CHANGE_AUTH_LAYOUT,
    LOGIN_INPUT_UPDATE,
    REGISTER_INPUT_UPDATE,
    SUBMIT_LOGIN_EMAIL,
    SUBMIT_LOGIN_PASSWORD,
    SUBMIT_REGISTER_FORM,
    FORGET_PASSWORD_INPUT_UPDATE,
    SUBMIT_FORGET_PASSWORD_EMAIL,

} from "../types";

export const login_input_update = () => {
    return {
        type: LOGIN_INPUT_UPDATE,
    };
};

const submit_login_email_success = () => {
    return {
        type: SUBMIT_LOGIN_EMAIL,
    };
};

export const submit_login_email = () => {
    return {
        type: SUBMIT_LOGIN_EMAIL,
    };
};

const submit_login_password_success = () => {
    return {
        type: SUBMIT_LOGIN_PASSWORD,
    };
};

export const submit_login_password = () => {
    return {
        type: SUBMIT_LOGIN_PASSWORD,
    };
};

export const register_input_update = () => {
    return {
        type: REGISTER_INPUT_UPDATE,
    };
};

const submit_register_success = () => {
    return {
        type: SUBMIT_REGISTER_FORM,
    };
};

export const submit_register_form = () => {
    return {
        type: SUBMIT_REGISTER_FORM,
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
