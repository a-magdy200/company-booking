import React from 'react';
import { connect } from 'react-redux';
import InspectionsListComponent from "../../shared/Components/InspectionsList";
import {getInspections} from "../../../redux/actions/client/inspectionsActions";
import "../../../assets/styles/home.css";
const HomeComponent = (props) => {
    const { client_inspections } = props;
    return (
        <div className={"container"}>
            <h2>Dashboard</h2>
            <InspectionsListComponent inspections={ client_inspections }/>
        </div>
    )
};
const mapStateToProps = ({ client_inspections }) => {
    return { ...client_inspections };
};
const mapDispatchToProps = dispatch => {
    dispatch(getInspections("dashboard"));
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
