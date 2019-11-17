// Login Reducer Types
export const LOGIN_INPUT_UPDATE = 'login_input_update';
export const REGISTER_INPUT_UPDATE = 'register_input_update';
export const FORGET_PASSWORD_INPUT_UPDATE = 'forget_password_input_update';
export const SUBMIT_LOGIN_EMAIL = 'submit_login_email';
export const SUBMIT_LOGIN_PASSWORD = 'submit_login_password';
export const SUBMIT_REGISTER_FORM = 'submit_register_form';
export const SUBMIT_FORGET_PASSWORD_EMAIL = 'submit_forget_password_email';
export const CHANGE_AUTH_LAYOUT = 'change_auth_layout';
export const AUTH_LAYOUT_LOADING = 'auth_layout_loading';
export const AUTH_ERROR = 'auth_error';

// Auth Reducer Types
export const AUTH_INPUT_UPDATE = 'auth_input_update';
export const LOGIN = 'login';
export const SIGNUP = 'signup';
export const LOGIN_ERRORS = 'login_errors';
export const SIGNUP_ERRORS = 'signup_errors';
export const USER_AUTH_LOADING = 'user_auth_loading';
export const SET_USER = 'set_user';
export const USER_LOGOUT = 'user_logout';

// Client Types
// Inspections Reducer Types
export const CLIENT_GET_INSPECTIONS = 'client_get_inspections';
export const CLIENT_GET_INSPECTIONS_ERROR = 'client_get_inspections_error';
export const CLIENT_GET_INSPECTION = 'client_get_inspection';
export const CLIENT_GET_INSPECTION_ERROR = 'client_get_inspection_error';

// New Inspection Reducer Types
export const CLIENT_NEW_INSPECTION_INPUT_UPDATE = 'client_new_inspection_input_update';
export const CLIENT_NEW_INSPECTION_ERROR = 'client_new_inspection_error';
export const CLIENT_NEW_INSPECTION_SUCCESS = 'client_new_inspection_success';
export const CLIENT_NEW_INSPECTION_LOADING = 'client_new_inspection_loading';
export const CLIENT_NEW_INSPECTION_PRELOAD_INPUTS = 'client_new_inspection_preload_inputs';
export const CLIENT_NEW_INSPECTION_RESET = 'client_new_inspection_reset';


// Inspector Types
// GET inspections types
export const INSPECTOR_GET_INSPECTIONS = 'inspector_get_inspections';
export const INSPECTOR_GET_INSPECTIONS_ERROR  = 'inspector_get_inspections_error';
export const INSPECTOR_GET_INSPECTION = 'inspector_get_inspection';
export const INSPECTOR_GET_INSPECTION_ERROR  = 'inspector_get_inspection_error';
// Report types
export const INSPECTOR_REPORT_UPDATE_INPUT = 'inspector_report_update_input';
export const INSPECTOR_REPORT_SUBMIT = 'inspector_report_submit';
export const INSPECTOR_REPORT_SUBMIT_SUCCESS = 'inspector_report_submit_success';
export const INSPECTOR_REPORT_SUBMIT_ERROR = 'inspector_report_submit_error';
export const INSPECTOR_SCHEDULE_REPORT = 'inspector_schedule_report';
export const INSPECTOR_SCHEDULE_REPORT_SUCCESS = 'inspector_schedule_report_success';
export const INSPECTOR_SCHEDULE_REPORT_ERROR = 'inspector_schedule_report_error';
export const INSPECTOR_SCHEDULE_REPORT_UPDATE_INPUT = 'inspector_report_schedule';


// Admin Types
export const GET_ADMIN_DASHBOARD = 'get_admin_dashboard';
export const GET_ADMIN_DASHBOARD_ERROR = 'get_admin_dashboard_error';
export const SELECT_REQUEST_ACTION = 'select_request_action';
export const SUBMIT_REQUEST_ACTION = 'submit_request_action';
