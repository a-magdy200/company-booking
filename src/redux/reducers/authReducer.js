import {
    INPUT_UPDATE,
    LOGIN,
    SIGNUP
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
};
export default (state = INITIAL_STATE, action) => {
    const {type} = action;
    console.log(action);
    switch (type) {
        case INPUT_UPDATE:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case LOGIN:
            const { login_email, login_password } = state;
            axios.get('www.google.com').then(console.log)
            return () => ({...INITIAL_STATE});
        case SIGNUP:
            const { signup_email, signup_password, first_name, last_name } = state;
            return () => ({...INITIAL_STATE});
        default:
            return state;
    }
}
