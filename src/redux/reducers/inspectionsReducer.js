import {GET_INSPECTIONS, GET_INSPECTIONS_ERROR} from "../types";
const INITIAL_STATE = {
    inspections: [],
    error: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_INSPECTIONS:
            return {...state, inspections: action.payload.inspections};
        case GET_INSPECTIONS_ERROR:
            return {...state, error: action.payload.error};
        default:
            return {...state};
    }
}
