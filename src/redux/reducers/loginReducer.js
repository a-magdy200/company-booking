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

const INITIAL_STATE = {
    layout: 'login',
    login: {
        email: '',
        emailValid: false,
        password: '',
        loading: false
    },
    register: {
        email: '',
        password: '',
        confirm_password: '',
        loading: false
    },
    forget_password_email: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_AUTH_LAYOUT:
            return state;
        case LOGIN_INPUT_UPDATE:
            return state;
        case REGISTER_INPUT_UPDATE:
            return state;
        case SUBMIT_LOGIN_EMAIL:
            return state;
        case SUBMIT_LOGIN_PASSWORD:
            return state;
        case SUBMIT_REGISTER_FORM:
            return state;
        case FORGET_PASSWORD_INPUT_UPDATE:
            return state;
        case SUBMIT_FORGET_PASSWORD_EMAIL:
            return state;
        default:
            return state;
    }
}
