import { combineReducers } from "redux";
import authReducer from "./authReducer";
import inspectionsClientReducer from "./client/inspectionsClientReducer";
import newInspectionClientReducer from './client/newInspectionClientReducer';

export default combineReducers({
    auth: authReducer,
    client_inspections: inspectionsClientReducer,
    client_newInspection: newInspectionClientReducer,
});
