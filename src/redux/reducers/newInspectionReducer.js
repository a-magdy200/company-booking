import {
    NEW_INSPECTION_ERROR,
    NEW_INSPECTION_INPUT_UPDATE,
    NEW_INSPECTION_SUCCESS
} from "../types";

const INITIAL_STATE = {
    error: '',
    location: 'default location from profile',
    type: '',
    template: '',
    date: '',
    dueDate: '',
    contactDetails: {
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
    }
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NEW_INSPECTION_INPUT_UPDATE:
            const { name, value } = action.payload;
            if (INITIAL_STATE.contactDetails.hasOwnProperty(name)) {
                return {...state, contactDetails:{[name]:value}};
            }
            console.log(action);
            return {...state, [name]: value};
        case NEW_INSPECTION_ERROR:
            return {...state, error: action.payload.error};
        case NEW_INSPECTION_SUCCESS:
            return {...INITIAL_STATE};
        default:
            return state;
    }
}
