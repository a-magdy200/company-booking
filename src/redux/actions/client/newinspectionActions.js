import axios from 'axios';
import {
    CLIENT_NEW_INSPECTION_INPUT_UPDATE,
    CLIENT_NEW_INSPECTION_ERROR,
    CLIENT_NEW_INSPECTION_SUCCESS,
    CLIENT_NEW_INSPECTION_LOADING,
    CLIENT_NEW_INSPECTION_RESET,
    CLIENT_NEW_INSPECTION_PRELOAD_INPUTS
} from "../../types";
import { server_url, api_url } from "../../../shared/api_url";
const isValidDate = date => (date instanceof Date && !isNaN(date));

export const updateInput = (event, dateInputName = null) => {
    let name, value;
    if (isValidDate(event)) {
        name = dateInputName;
        value = event;
    } else {
        const {target} = event;
        name = target.getAttribute("name");
        value = target.value;
    }
    return {
        type: CLIENT_NEW_INSPECTION_INPUT_UPDATE,
        payload: {
            name, value
        }
    };
};
const send_request_success = () => {
    return {
        type: CLIENT_NEW_INSPECTION_SUCCESS
    }
};
const send_request_error = error => {
    return {
        type: CLIENT_NEW_INSPECTION_ERROR,
        payload: {error}
    }
};
const set_loading_status = () => {
    return {
        type: CLIENT_NEW_INSPECTION_LOADING
    };
};
export const sendRequest = event => {
    if (event) {
        event.preventDefault();
    }

    return (dispatch, getState) => {
        dispatch(set_loading_status());
        const { client_newInspection } = getState();
        const {
            client_id, contactDetails,
            location, type, template, date, dueDate
        } = client_newInspection;
        const { first_name, last_name, email, phone } = contactDetails;
        axios.post(server_url + api_url.post_inspection, {
            location, type, template, date, dueDate,
            client_id, first_name, last_name, email, phone

        }).then( response => {
            dispatch(send_request_success());
        }).catch( error => {
            dispatch(send_request_error(error));
        });
    }
};
export const reset = () => {
    return {
        type: CLIENT_NEW_INSPECTION_RESET
    };
};
export const new_inspection_preload_inputs = ({client_id, email, first_name, last_name}) => {
    return {
        type: CLIENT_NEW_INSPECTION_PRELOAD_INPUTS,
        payload: {
            email, first_name, last_name, client_id
        }
    };
};
