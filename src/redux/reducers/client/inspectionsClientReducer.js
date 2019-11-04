import {
    CLIENT_GET_INSPECTION,
    CLIENT_GET_INSPECTION_ERROR,
    CLIENT_GET_INSPECTIONS,
    CLIENT_GET_INSPECTIONS_ERROR
} from "../../types";
const INITIAL_STATE = {
    client_inspections: [],
    error: '',
    inspection: {}
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLIENT_GET_INSPECTIONS:
            return {...INITIAL_STATE, client_inspections: action.payload.inspections};
        case CLIENT_GET_INSPECTIONS_ERROR:
            return {...state, error: action.payload.error};
        case CLIENT_GET_INSPECTION:
            return {...INITIAL_STATE, inspection: action.payload.inspection};
        case CLIENT_GET_INSPECTION_ERROR:
            return {...state, error: action.payload.error};
        default:
            return {...state};
    }
}
