import {
    INPUT_UPDATE,
    LOGIN,
    SIGNUP
} from "../types";

export const updateInput = (input) => {
    const { target } = input;
    const name = target.getAttribute("name");
    const value = target.value;
    return {
        type: INPUT_UPDATE,
        payload: {
            name, value
        }
    };
};
export const login = (event) => {
    event.preventDefault();
    return {
        type: LOGIN
    };
};
export const signup = (event) => {
    event.preventDefault();
    return {
        type: SIGNUP
    };
};
