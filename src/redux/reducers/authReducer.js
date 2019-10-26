import {
    INPUT_UPDATE,
    LOGIN,
    SIGNUP,
    LOGIN_ERRORS,
    SIGNUP_ERRORS,
    LOADING
} from "../types";
import axios from 'axios';
const INITIAL_STATE = {
    login_email: '',
    login_password: '',
    signup_email: '',
    signup_password: '',
    signup_confirm_password: '',
    first_name: '',
    last_name: '',
    login_errors: [],
    signup_errors: [],
    loading: false
};
export default (state = INITIAL_STATE, action) => {
    const {type} = action;
    console.log(action);
    switch (type) {
        case INPUT_UPDATE:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case LOGIN:
            return {...INITIAL_STATE};
        case SIGNUP:
            return {...INITIAL_STATE};
        case LOADING:
            return {...state, loading: true};
        case LOGIN_ERRORS:
            return {
                ...state,
                login_errors: action.payload.errors
            };
        case SIGNUP_ERRORS:
            return {
                ...state,
                signup_errors: action.payload.errors
            };
        default:
            return state;
    }
}
