import { combineReducers } from "redux";
import authReducer from "./authReducer";
import inspectionsReducer from "./inspectionsReducer";
export default combineReducers({
    auth: authReducer,
    inspections: inspectionsReducer
});
