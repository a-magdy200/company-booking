import React from 'react';
import { connect } from 'react-redux';
import {getInspections} from "../../../redux/actions/client/inspectionsActions";
import "../../../assets/styles/home.css";
import {InspectionsListComponent} from "../../shared/Components";
const AllInspectionsComponent = (props) => {
    const { client_inspections } = props;
    return (
        <div className={"container"}>
            <h2>All Inspections</h2>
            <InspectionsListComponent inspections={ client_inspections }/>
        </div>
    )
};
const mapStateToProps = ({ client_inspections }) => {
    return { ...client_inspections };
};
const mapDispatchToProps = dispatch => {
    dispatch(getInspections("all"));
    return {

    }
};
export default connect(mapStateToProps, mapDispatchToProps)(AllInspectionsComponent);
