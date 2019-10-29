import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import HomeComponent from "../Client/Home/HomeComponent";
import NewInspectionComponent from "../Client/New-Inspection/NewInspectionComponent";
import AllInspectionsComponent from "../Client/All-Inspections/AllInspectionsComponent";
import {redirectHome} from "../../shared/functions";

const InspectorRoutes = ({ user }) => {
    if (user === 'b') {
        return (
            <Fragment>
                <Route exact path={"/"} component={HomeComponent}/>
                <Route path={"/new-request"} component={NewInspectionComponent}/>
                <Route path={"/requests-list"} component={AllInspectionsComponent}/>
            </Fragment>
        );
    } else {
        return redirectHome();
    }
};
export default InspectorRoutes;
