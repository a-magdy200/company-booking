import React from 'react';
import { connect } from 'react-redux';
import {
    get_inspection,
    updateInput,
    submitReport, scheduleReport, updateSchedule
} from "../../../redux/actions/inspector/inspectorActions";
import { redirectHome } from "../../../shared/functions";
import {
    DetailsComponent,
    NewReportComponent
} from "../../shared/Components";
import ScheduleReportComponent from "./ScheduleReport/ScheduleReportComponent";

const ReportComponent = props => {
    const { inspection } = props;
    return <div className={'container'}>
        <DetailsComponent title={'Inspection Details'} details={inspection} />
        { renderReportSection(props) }

    </div>;
};
const renderReportSection = props => {
    const {
        inspection, onChange, submitReport, report,
        scheduleReport, schedule, onScheduleChange, scheduleLoading,
        user
    } = props;
    const { inspector, status } = inspection;
    const { id } = user;
    if (scheduleLoading) {
        return <div className={'loading'}>Loading...</div>
    }
    if (status === 'completed') {
        return <DetailsComponent title={"Report Details"} details={inspection.report} />;
    } else {
        if (inspector) {
            if (inspector.id === id) {
                return <NewReportComponent report={report} onChange={onChange} submitReport={submitReport}/>
            } else {
                return null;
            }
        } else {
            return <ScheduleReportComponent schedule={schedule} onChange={onScheduleChange} onSubmit={scheduleReport}/>
        }
    }
};
const mapStateToProps = ({inspector_inspection_report}) => {
    return  { ...inspector_inspection_report };
};
const mapDispatchToProps = (dispatch, { id, user }) => {
    dispatch(get_inspection(id));
    return {
        onChange: event => dispatch(updateInput(event)),
        submitReport: event => dispatch(submitReport(event, id)),
        scheduleReport: event => dispatch(scheduleReport(event, user, id)),
        onScheduleChange: value => dispatch(updateSchedule(value))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReportComponent);
