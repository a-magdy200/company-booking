import {GET_ADMIN_DASHBOARD, GET_ADMIN_DASHBOARD_ERROR, SELECT_REQUEST_ACTION} from "../../types";

const INITIAL_STATE = {
    requests: [],
    requests_no_template: [],
    alerts: [],
    actions: [
        {text: "op 1", value: 1},
        {text: "op 2", value: 2},
        {text: "op 3", value: 3},
        {text: "op 4", value: 4},
    ],
    selectedActions: [],
    error: false
};
export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ADMIN_DASHBOARD:
            const data = action.payload.data || [];
            const requests = [],
                requests_no_template = [],
                alerts = [];
            data.map( item => {
                if (item.status) {
                    alerts.push(item);
                } else {
                    if (item.template_ref === '') {
                        requests_no_template.push(item);
                    } else {
                        requests.push(item);
                    }
                }
                return null;
            });
            return {
                ...INITIAL_STATE,
                requests, requests_no_template, alerts,
                error: false
            };
        case SELECT_REQUEST_ACTION:
            const selectedActions = [ ...state.selectedActions ];
            const { name, value } = action.payload;
            let selectedActionExists = false;
            for (let i = 0; i < selectedActions.length; i++) {
                if (selectedActions[i].name === name ) {
                    if (value === '') {
                        selectedActions.splice(i, 1);
                        break;
                    } else {
                        selectedActions[i].value = value;
                    }
                    selectedActionExists = true;
                }
            }
            if ( value !== '' && !selectedActionExists ) {
                selectedActions.push({ name, value });
            }
            return { ...state, selectedActions };
        case GET_ADMIN_DASHBOARD_ERROR:
            return {
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
}
