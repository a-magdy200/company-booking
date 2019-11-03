import api_url from "../../../shared/api_url";
import axios from 'axios';
import {
    INSPECTOR_GET_INSPECTION,
    INSPECTOR_GET_INSPECTION_ERROR,
    INSPECTOR_GET_INSPECTIONS,
    INSPECTOR_GET_INSPECTIONS_ERROR,
    INSPECTOR_REPORT_SUBMIT,
    INSPECTOR_REPORT_SUBMIT_ERROR,
    INSPECTOR_REPORT_UPDATE_INPUT
} from "../../types";


const fetch_inspections_success = inspections => {
    return {
        type: INSPECTOR_GET_INSPECTIONS,
        payload: { inspections }
    };
};
const fetch_inspections_error = error => {
    return {
        type: INSPECTOR_GET_INSPECTIONS_ERROR,
        payload: { error }
    };
};
export const get_inspections = page => {
    let url;
    if (page === 'all') {
        url = api_url.get_inspector_all_inspections;
    } else if (page === 'dashboard') {
        url = api_url.get_inspector_dashboard_inspections;
    } else if (page === 'schedule') {
        url = api_url.get_inspector_schedule_inspections;
    }
    return (dispatch) => {
        axios.get(url)
            .then( response => dispatch(fetch_inspections_success(response.data)))
            .catch( error => dispatch(fetch_inspections_error(error)));
    }
};
const fetch_inspection_success = inspection => {
    return {
        type: INSPECTOR_GET_INSPECTION,
        payload: { inspection }
    };
};
const fetch_inspection_error = error => {
    return {
        type: INSPECTOR_GET_INSPECTION_ERROR,
        payload: { error }
    };
};
export const get_inspection = id => {
    return dispatch => {
        axios.get(api_url.get_inspector_inspection)
            .then( response => dispatch(fetch_inspection_success(response.data)))
            .catch( error => dispatch(fetch_inspection_error(error)));
    }
};

export const updateInput = event => {
    const name = event.target.getAttribute('name');
    const value = event.target.value;
    return {
        type: INSPECTOR_REPORT_UPDATE_INPUT,
        payload: {
            name, value
        }
    };
};

const submit_report_success = () => {
    return {
        type: INSPECTOR_REPORT_SUBMIT
    };
};
const submit_report_error = error => {
    return {
        type: INSPECTOR_REPORT_SUBMIT_ERROR,
        payload: { error }
    };
};

export const submitReport = event => {
    event.preventDefault();
    return (dispatch, getState) => {
        const { inspector_inspection_report } = getState();
        const id = inspector_inspection_report.inspection.id;
        const { report } = inspector_inspection_report;
        axios.post(api_url.post_inspector_submit_report, {
            id,
            ...report
        }).then( response => dispatch(submit_report_success()))
            .catch( error => dispatch(submit_report_error(error)))
    };
};


