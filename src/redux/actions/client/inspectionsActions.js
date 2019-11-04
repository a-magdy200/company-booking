import axios from 'axios';
import {
    CLIENT_GET_INSPECTION,
    CLIENT_GET_INSPECTION_ERROR,
    CLIENT_GET_INSPECTIONS,
    CLIENT_GET_INSPECTIONS_ERROR
} from "../../types";
import { server_url, api_url } from "../../../shared/api_url";

const inspections_fetch_success = inspections => {
    return {
        type: CLIENT_GET_INSPECTIONS,
        payload: { inspections }
    };
};
const inspections_fetch_error = error => {
    return {
        type: CLIENT_GET_INSPECTIONS_ERROR,
        payload: { error }
    };
};
const inspection_fetch_success = inspection => {
    return {
        type: CLIENT_GET_INSPECTION,
        payload: { inspection }
    };
};
const inspection_fetch_error = error => {
    return {
        type: CLIENT_GET_INSPECTION_ERROR,
        payload: { error }
    };
};
export const getInspection = id => {
    return dispatch => {
        let url = server_url + api_url.get_inspection + id;
        axios.get(url)
            .then(response => dispatch(inspection_fetch_success(response.data.inspection)))
            .catch(error => dispatch(inspection_fetch_error(error)));
    }
};
export const getInspections = page => {
    return (dispatch, getState) => {
        const { user } = getState();
        const { id } = user;
        let url = server_url + api_url.get_client_inspections + '/' + page;
        url = url.replace('%ID%', id);
        axios.get(url)
            .then( response => {
                dispatch(inspections_fetch_success(response.data.inspections));
            })
            .catch(error => {
                console.log("Fetch Inspections Error");
                console.log(error);
                dispatch(inspections_fetch_error(error));
            });
    }
};
