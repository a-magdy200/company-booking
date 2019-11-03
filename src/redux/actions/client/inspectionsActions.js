import axios from 'axios';
import { CLIENT_GET_INSPECTIONS, CLIENT_GET_INSPECTIONS_ERROR } from "../../types";
import { server_url, api_url } from "../../../shared/api_url";

const inspections_fetch_success = response => {
    return {
        type: CLIENT_GET_INSPECTIONS,
        payload: { inspections: response.data }
    };
};
const inspections_fetch_error = error => {
    return {
        type: CLIENT_GET_INSPECTIONS_ERROR,
        payload: { error }
    };
};
export const getInspections = page => {
    return (dispatch, getState) => {
        const url = page === 'all' ? server_url + api_url.get_client_all_inspections : server_url + api_url.get_client_dashboard_inspections;
        axios.get(url)
            .then( response => {
                dispatch(inspections_fetch_success(response));
            })
            .catch(error => {
                console.log("Fetch Inspections Error");
                console.log(error);
                dispatch(inspections_fetch_error(error));
            });
    }
};
