import React from 'react';
import { connect } from 'react-redux';
import {getInspection} from "../../../redux/actions/client/inspectionsActions";
import {DetailsComponent} from "../../shared/Components";

const ViewReportComponent = ({inspection}) => {
    const {
        date, dueDate, location,
        type, template, status,
        contactDetails, schedule, inspector, report
    } = inspection;
    const inspectionDetails = {
        date, dueDate, location, type, template, status
    };
    const inspectorDetails = { schedule, ...inspector };
    return <div className={'container'}>
        <DetailsComponent title={'Inspection Details'} details={inspectionDetails}/>
        { report ? <DetailsComponent title={'Report Details'} details={report}/> : null }
        { contactDetails ? <DetailsComponent title={'Contact Details'} details={contactDetails}/> : null }
        { inspector ? <DetailsComponent title={'Inspector Details'} details={inspectorDetails}/> : null }
    </div>
};

const mapStateToProps = ( {client_inspections} ) => {
    return {inspection: { ...client_inspections.inspection }};
};
const mapDispatchToProps = ( dispatch, { id }) => {
    dispatch(getInspection(id));
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewReportComponent);
