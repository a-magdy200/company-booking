import React from 'react';
import { connect } from 'react-redux';
import InspectionsListComponent from "../Home/Components/InspectionsList";
import {getInspections} from "../../redux/actions/inspectionsActions";
import "../../assets/styles/home.css";
const AllInspectionsComponent = (props) => {
    const { inspections } = props;
    return (
        <div className={"container"}>
            <h2>All Inspections</h2>
            <InspectionsListComponent inspections={ inspections }/>
        </div>
    )
};
const mapStateToProps = ({ inspections }) => {
    return { ...inspections };
};
const mapDispatchToProps = dispatch => {
    dispatch(getInspections("all"));
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AllInspectionsComponent);
