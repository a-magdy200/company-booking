import {SET_USER, USER_LOGOUT} from "../types";

export const setUser = (user, token) => {
    return {
        type: SET_USER,
        payload: { user, token }
    };
};
export const logoutUser = () => {
    return {
        type: USER_LOGOUT
    };
};
