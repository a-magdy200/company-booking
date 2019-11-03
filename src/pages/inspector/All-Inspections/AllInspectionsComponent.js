import React from 'react';
import { connect } from 'react-redux';
import {get_inspections} from "../../../redux/actions/inspector/inspectorActions";
import {InspectionsListComponent} from "../../shared/Components";

const AllInspectionsComponent = props => {
    const { inspections } = props;
    return <div className={'container'}>
        <InspectionsListComponent inspections={inspections}/>
    </div>;
};
const mapStateToProps = ({inspector_inspections}) => {
    return  { inspections: inspector_inspections.inspections };
};
const mapDispatchToProps = dispatch => {
    dispatch(get_inspections('all'));
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(AllInspectionsComponent);
