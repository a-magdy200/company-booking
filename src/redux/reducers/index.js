import { combineReducers } from "redux";
import authReducer from "./authReducer";
import inspectionsClientReducer from "./client/inspectionsClientReducer";
import newInspectionClientReducer from './client/newInspectionClientReducer';
import inspectorInspectionsReducer from "./inspector/inspectorInspectionsReducer";
import inspectorReportReducer from "./inspector/inspectorReportReducer";
import userReducer from "./userReducer";

export default combineReducers({
    auth: authReducer,
    client_inspections: inspectionsClientReducer,
    client_newInspection: newInspectionClientReducer,
    inspector_inspections: inspectorInspectionsReducer,
    inspector_inspection_report: inspectorReportReducer,
    user: userReducer
});
