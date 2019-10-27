import axios from 'axios';
import {
    NEW_INSPECTION_INPUT_UPDATE,
    NEW_INSPECTION_ERROR,
    NEW_INSPECTION_SUCCESS
} from "../types";
import api_url from "../../shared/api_url";
const isValidDate = date => (date instanceof Date && !isNaN(date));

export const updateInput = event => {
    let name, value;
    if (isValidDate(event)) {
        name = "date";
        value = event;
    } else {
        const {target} = event;
        name = target.getAttribute("name");
        value = target.value;
    }
    return {
        type: NEW_INSPECTION_INPUT_UPDATE,
        payload: {
            name, value
        }
    };
};
const send_request_success = () => {
    return {
        type: NEW_INSPECTION_SUCCESS
    }
};
const send_request_error = error => {
    return {
        type: NEW_INSPECTION_ERROR,
        payload: {error}
    }
};
export const sendRequest = event => {
    if (event) {
        event.preventDefault();
    }

    return (dispatch, getState) => {
        const { newInspection } = getState();
        const {
            first_name, last_name, email, phone,
            location, type, template, date, dueDate
        } = newInspection;
        axios.post(api_url().new_inspection, {
            location, type, template, date, dueDate,
            contactDetails: {
                first_name, last_name, email, phone
            }
        }).then( response => {
            dispatch(send_request_success());
        }).catch( error => {
            dispatch(send_request_error(error));
        });
    }
};
