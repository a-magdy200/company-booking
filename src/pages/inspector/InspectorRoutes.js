import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import {redirectHome} from "../../shared/functions";
import InspectionsScheduleComponent from "./Inspections-Schedule/InspectionsScheduleComponent";
import HomeComponent from "./Home/HomeComponent";
import AllInspectionsComponent from "./All-Inspections/AllInspectionsComponent";

const InspectorRoutes = ({ user }) => {
    if (user === 'b') {
        return (
            <Fragment>
                <Route exact path={"/"} component={HomeComponent}/>
                <Route path={"/schedule"} component={InspectionsScheduleComponent}/>
                <Route path={"/inspections"} component={AllInspectionsComponent}/>
            </Fragment>
        );
    } else {
        return redirectHome();
    }
};
export default InspectorRoutes;
