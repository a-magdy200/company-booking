import {SET_USER, USER_LOGOUT} from "../types";

const INITIAL_STATE = {
    first_name: '',
    last_name: '',
    email: '',
    token: '',
    id: '',
    role: '',
    isLoggedIn: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USER:
            const {token, user} = action.payload;
            return {
                ...user, token,
                isLoggedIn: true
            };
        case USER_LOGOUT:
            return { ...INITIAL_STATE };
        default:
            return {...state};
    }
}
