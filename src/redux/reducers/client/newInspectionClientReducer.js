import {
    CLIENT_NEW_INSPECTION_ERROR,
    CLIENT_NEW_INSPECTION_INPUT_UPDATE,
    CLIENT_NEW_INSPECTION_LOADING,
    CLIENT_NEW_INSPECTION_PRELOAD_INPUTS,
    CLIENT_NEW_INSPECTION_RESET,
    CLIENT_NEW_INSPECTION_SUCCESS,
} from "../../types";

const INITIAL_STATE = {
    error: '',
    location: 'default location from profile',
    type: '',
    template: '',
    date: '',
    dueDate: '',
    client_id: '',
    loading: false,
    contactDetails: {
        first_name: '',
        last_name: '',
        email: '',
        phone: ''
    },
    success: false,
    preloaded: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLIENT_NEW_INSPECTION_INPUT_UPDATE:
            const { name, value } = action.payload;
            if (INITIAL_STATE.contactDetails.hasOwnProperty(name)) {
                const { contactDetails } = state;
                return {
                    ...state,
                    contactDetails: {
                        ...contactDetails,
                        [name]: value || ''
                    }
                };
            }
            return {...state, [name]: value};
        case CLIENT_NEW_INSPECTION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case CLIENT_NEW_INSPECTION_SUCCESS:
            return {...INITIAL_STATE, success: true};
        case CLIENT_NEW_INSPECTION_LOADING:
            return {...state, loading: true};
        case CLIENT_NEW_INSPECTION_RESET:
            return {...INITIAL_STATE};
        case CLIENT_NEW_INSPECTION_PRELOAD_INPUTS:
            const { client_id, email, first_name, last_name } = action.payload;
            const types = ['Sports', 'Baby', 'Music', 'Industrial', 'Kids', 'Health', 'Home', 'Shoes', 'Tools', 'Beauty', 'Automotive', 'Outdoors', 'Clothing'];
            const templates = ["template 1", "template 2"];
            return {
                ...INITIAL_STATE, client_id,
                preloaded: true,
                template: templates[0],
                type: types[0],
                contactDetails: {
                    email, first_name, last_name,
                    phone: ''
                }
            };
        default:
            return state;
    }
}
