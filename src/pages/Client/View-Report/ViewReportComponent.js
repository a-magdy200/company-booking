import React from 'react';
import { connect } from 'react-redux';
import {getInspection} from "../../../redux/actions/client/inspectionsActions";
import {Card, CardSection} from "../../shared/Components";

const ViewReportComponent = ({id, inspection}) => {
    const keys = Object.keys(inspection);
    return <div className={'container'}>
        <h2>Report Details</h2>
        <Card>
            {keys.map( (key, index) => {
                return <CardSection key={index} title={key} value={inspection[key]}/>
            })}
        </Card>
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
