import React from 'react';
import { connect } from 'react-redux';
import InspectionsListComponent from "../../shared/Components/InspectionsList";

const HomeComponent = props => {
    const { inspections } = props;

    return <div className={'container'}>
        <InspectionsListComponent inspections={inspections}/>
    </div>;
};
const mapStateToProps = state => {

    return  { ...state };
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
