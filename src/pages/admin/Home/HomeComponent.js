import React from 'react';
import { connect } from 'react-redux';
import { getAdminDashbaord, submitAction } from "../../../redux/actions/admin/adminActions";
import TableComponent from "./components/table/TableComponent";

const HomeComponent = props => {
    const tableHeading = ['request date', 'solicitor client', 'venue', 'start date', 'end date', 'type', 'template ref', 'patient name', 'address', 'tel no', 'notes', 'status', 'action'];
    const actions = [
        {text: "op 1", value: 1},
        {text: "op 2", value: 2},
        {text: "op 3", value: 3},
        {text: "op 4", value: 4},
    ];
    const {
        requests,
        alerts,
        requests_no_template,
        error,
        submitAction,
        selectedActions
    } = props;
    if ( error ) {
        return <div>{ error }</div>;
    }
    return <div className={'container'}>
            <TableComponent
                data={requests}
                heading={tableHeading}
                actions={actions}
                selectedActions={selectedActions}
                title={'examination requests'} />
            <TableComponent
                data={requests_no_template}
                heading={tableHeading}
                actions={actions}
                selectedActions={selectedActions}
                title={'examination requests - no template'} />
            <TableComponent
                data={alerts}
                heading={tableHeading}
                actions={actions}
                selectedActions={selectedActions}
                status
                title={'alerts'} />
    </div>
};

const mapStateToProps = ({ admin }) => {
    return { ...admin};
};
const mapDispatchToProps = dispatch => {
    dispatch( getAdminDashbaord() );
    return {
        submitAction: (event, id) => dispatch(submitAction(event, id))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
