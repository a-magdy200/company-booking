import {SET_USER} from "../types";

export const setUser = (user, token) => {
    return {
        type: SET_USER,
        payload: { user, token }
    };
};
