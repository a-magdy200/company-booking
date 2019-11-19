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
    AUTH_ERROR,
} from "../types";

const INITIAL_STATE = {
    layout: 'login',
    loading: false,
    login: {
        email: 'Nella_Becker@gmail.com',
        password: 'HW5u2Y3Km9vr9wL',
        emailValid: false,
        staySigned: false,
    },
    register: {
        email: '',
        password: '',
        confirm_password: '',
    },
    forget_password_email: '',
    error: false
};
export default (state = INITIAL_STATE, action) => {
    let newState = {};
    switch (action.type) {
        case CHANGE_AUTH_LAYOUT:
            const { layout } = action.payload;
            newState = { ...state };
            if (layout === 'login') {
                newState.login.password = '';
            }
            newState.error = false;
            return { ...newState, layout };
        case LOGIN_INPUT_UPDATE:
            const loginName = action.payload.name;
            const loginValue = action.payload.value;
            const { login } = state;
            if (loginName === 'staySigned') {
                login.staySigned = !login.staySigned;
            } else {
                login[loginName] = loginValue;
            }
            return { ...state, login: { ...login } };
        case REGISTER_INPUT_UPDATE:
            const registerName = action.payload.name;
            const registerValue = action.payload.value;
            const { register } = state;
            register[registerName] = registerValue;
            return { ...state, register: { ...register } };
        case AUTH_LAYOUT_LOADING:
            return { ...state, loading: true };
        case SUBMIT_LOGIN_EMAIL:
            newState = { ...state };
            newState.login.emailValid = true;
            newState.layout = 'password';
            newState.loading = false;
            newState.error = false;
            return { ...newState };
        case SUBMIT_LOGIN_PASSWORD:
            newState = { ...state };
            newState.login = {
                email: '',
                password: '',
                emailValid: false,
                staySigned: false,
            };
            newState.error = false;
            newState.layout = 'login';
            newState.loading = false;
            return { ...newState };
        case SUBMIT_REGISTER_FORM:
            newState = { ...state };
            newState.register = {
                email: '',
                password: '',
                confirm_password: '',
            };
            newState.layout = 'login';
            newState.loading = false;
            newState.error = false;
            return { ...newState };
        case FORGET_PASSWORD_INPUT_UPDATE:
            return state;
        case SUBMIT_FORGET_PASSWORD_EMAIL:
            return state;
        case AUTH_ERROR:
            const { error } = action.payload;
            return {...state, error, loading: false};
        default:
            return state;
    }
}
