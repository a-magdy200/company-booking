import React from 'react';
import { connect } from 'react-redux';
import {
    get_inspection,
    updateInput,
    submitReport
} from "../../../redux/actions/inspector/inspectorActions";
import { redirectHome } from "../../../shared/functions";
import {
    DetailsComponent,
    NewReportComponent
} from "../../shared/Components";

const ReportComponent = props => {
    const { inspection, report, onChange, submitReport } = props;
    const { status } = inspection;
    return <div className={'container'}>
        <DetailsComponent title={'Inspection Details'} details={inspection} />
        {
            status === 'completed' ?
            <DetailsComponent title={"Report Details"} details={inspection.report} /> :
            <NewReportComponent report={report} onChange={onChange} submitReport={submitReport} />
        }

    </div>;
};
const mapStateToProps = ({inspector_inspection_report}) => {
    return  { ...inspector_inspection_report };
};
const mapDispatchToProps = (dispatch, { id }) => {
    if (id) {
        dispatch(get_inspection(id));
        return {
            onChange: event => dispatch(updateInput(event)),
            submitReport: event => dispatch(submitReport(event))
        };
    }
    return redirectHome();
};
export default connect(mapStateToProps, mapDispatchToProps)(ReportComponent);
