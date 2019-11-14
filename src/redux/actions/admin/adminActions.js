import {
    GET_ADMIN_DASHBOARD,
    GET_ADMIN_DASHBOARD_ERROR,
    SELECT_REQUEST_ACTION,
    SUBMIT_REQUEST_ACTION
} from "../../types";
import axios from 'axios';
import {api_url, server_url} from "../../../shared/api_url";


export const select_request_action = event => {
    const name = event.target.getAttribute('name');
    const value = event.target.value;
    return {
        type: SELECT_REQUEST_ACTION,
        payload: {
            name, value
        }
    };
};
const submit_request_action_success = () => {
    return {
        type: SUBMIT_REQUEST_ACTION,
    };
};
export const submit_request_action = (event, id) => {
    event.preventDefault();
    return (dispatch, getState) => {
        const { admin } = getState();
        const { selectedActions } = admin;
        let action;
        for (let i = 0; i < selectedActions.length; i++) {
            if (selectedActions[i].name === id) {
                action = selectedActions[i];
                break;
            }
        }
        dispatch(submit_request_action_success());
    }
};
const get_admin_dashboard_success = ({ data }) => {
    return {
        type: GET_ADMIN_DASHBOARD,
        payload: { data }
    };
};
const get_admin_dashboard_error = error => {
    return {
        type: GET_ADMIN_DASHBOARD_ERROR,
        payload: {
            error
        }
    }
};
export const getAdminDashbaord = () => {
    return dispatch => {
        axios.get(server_url + api_url.get_admin_dashboard)
            .then( response => dispatch(get_admin_dashboard_success(response)))
            .catch( error => dispatch(get_admin_dashboard_error(error)));
    }
};
export const submitAction = (event, id) => {
    event.preventDefault();
};
