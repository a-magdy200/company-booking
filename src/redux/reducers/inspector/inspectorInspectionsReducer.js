import {INSPECTOR_GET_INSPECTIONS, INSPECTOR_GET_INSPECTIONS_ERROR} from "../../types";

const INITIAL_STATE = {
    inspections: []
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INSPECTOR_GET_INSPECTIONS:
            return {
                ...state, inspections: action.payload.inspections
            };
        case INSPECTOR_GET_INSPECTIONS_ERROR:
            return {
                ...state, error: action.payload.error
            };
        default:
            return {...state};
    }
}
