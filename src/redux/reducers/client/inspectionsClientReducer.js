import {CLIENT_GET_INSPECTIONS, CLIENT_GET_INSPECTIONS_ERROR} from "../../types";
const INITIAL_STATE = {
    client_inspections: [],
    error: ''
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CLIENT_GET_INSPECTIONS:
            return {...state, client_inspections: action.payload.inspections};
        case CLIENT_GET_INSPECTIONS_ERROR:
            return {...state, error: action.payload.error};
        default:
            return {...state};
    }
}
