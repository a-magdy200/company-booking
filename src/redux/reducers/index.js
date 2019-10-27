import { combineReducers } from "redux";
import authReducer from "./authReducer";
import inspectionsReducer from "./inspectionsReducer";
import newInspectionReducer from './newInspectionReducer';

export default combineReducers({
    auth: authReducer,
    inspections: inspectionsReducer,
    newInspection: newInspectionReducer,
});
