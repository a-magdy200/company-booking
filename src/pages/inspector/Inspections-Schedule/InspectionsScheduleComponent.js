import React from 'react';
import { connect } from 'react-redux';

const InspectionsScheduleComponent = props => {
    return <div>Inspections Schedule</div>;
};
const mapStateToProps = state => {
    return  { ...state };
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(InspectionsScheduleComponent);
