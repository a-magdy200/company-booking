import React from 'react';
import { connect } from 'react-redux';
import {getInspection} from "../../../redux/actions/client/inspectionsActions";
import {Card, CardSection, InspectionDetailsComponent} from "../../shared/Components";

const ViewReportComponent = ({id, inspection}) => {
    return <div className={'container'}>
        <InspectionDetailsComponent inspection={inspection}/>
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
