import React from 'react';
import { connect } from 'react-redux';
import InspectionsListComponent from "../All-Inspections/Components/InspectionsList";
import {getInspections} from "../../../redux/actions/inspectionsActions";
import "../../../assets/styles/home.css";
const HomeComponent = (props) => {
    const { inspections } = props;
    return (
        <div className={"container"}>
            <h2>Dashboard</h2>
            <InspectionsListComponent inspections={ inspections }/>
        </div>
    )
};
const mapStateToProps = ({ inspections }) => {
    return { ...inspections };
};
const mapDispatchToProps = dispatch => {
    dispatch(getInspections("dashboard"));
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
