import React from 'react';
import { connect } from 'react-redux';

const AllInspectionsComponent = props => {
    return <div>Inspections List</div>;
};
const mapStateToProps = state => {
    return  { ...state };
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(AllInspectionsComponent);
