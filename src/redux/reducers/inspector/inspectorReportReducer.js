import {
    INSPECTOR_GET_INSPECTION,
    INSPECTOR_GET_INSPECTION_ERROR,
    INSPECTOR_SCHEDULE_REPORT_UPDATE_INPUT,
    INSPECTOR_REPORT_SUBMIT_ERROR,
    INSPECTOR_REPORT_SUBMIT_SUCCESS,
    INSPECTOR_REPORT_UPDATE_INPUT,
    INSPECTOR_SCHEDULE_REPORT,
    INSPECTOR_SCHEDULE_REPORT_SUCCESS,
    INSPECTOR_SCHEDULE_REPORT_ERROR
} from "../../types";
const INITIAL_STATE = {
    inspection: {},
    report: {
        comment: ''
    },
    schedule: '',
    scheduleLoading: false,
    scheduleSuccess: false
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INSPECTOR_GET_INSPECTION:
            return {
                ...state,
                inspection: action.payload.inspection
            };
        case INSPECTOR_REPORT_UPDATE_INPUT:
            const {name, value} = action.payload;
            const { report } = state;
            return {
                ...state,
                report: {
                    ...report,
                    [name]: value
                }
            };
        case INSPECTOR_SCHEDULE_REPORT_UPDATE_INPUT:
            return {...state, schedule: action.payload.value};
        case INSPECTOR_GET_INSPECTION_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        case INSPECTOR_REPORT_SUBMIT_SUCCESS:
            return { ...INITIAL_STATE };
        case INSPECTOR_REPORT_SUBMIT_ERROR:
            const { error } = action.payload.error;
            return {
                ...state,
                error
            };
        case INSPECTOR_SCHEDULE_REPORT:
            return {...state, scheduleLoading: true};
        case INSPECTOR_SCHEDULE_REPORT_SUCCESS:
            return { ...state, scheduleSuccess: true, schedule: '', scheduleLoading: false };
        case INSPECTOR_SCHEDULE_REPORT_ERROR:
            return {
                ...state,
                scheduleError: action.payload.error,
                scheduleLoading: false
            };
        default:
            return {...state};
    }
}
