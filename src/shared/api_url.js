export const server_url = 'http://localhost:5000/';
export const api_url = {
    login_url: "login",
    signup_url: "signup",
    get_client_inspections: "client/%ID%/inspections-list",
    get_client_dashboard_inspections: "data/inspections_list.json",
    get_inspector_dashboard_inspections: "data/inspections_list.json",
    get_inspector_inspections: "inspector/%ID%/inspections-list",
    get_inspector_schedule_inspections: "/data/inspections_list.json",
    get_inspection: "inspection/",
    post_inspection: "inspection",
    post_inspector_submit_report: "submitReport",
    post_inspector_schedule_report: "scheduleInspection"
};
