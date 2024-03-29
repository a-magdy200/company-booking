import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import {redirectHome} from "../../shared/functions";
import InspectionsScheduleComponent from "./Inspections-Schedule/InspectionsScheduleComponent";
import HomeComponent from "./Home/HomeComponent";
import AllInspectionsComponent from "./All-Inspections/AllInspectionsComponent";
import NewReportComponent from "./Report/ReportComponent";
import ProfileComponent from "../Profile/ProfileComponent";

const InspectorRoutes = ({ user }) => {
    if (user.role === 'inspector') {
        return (
            <Fragment>
                <Route exact path={"/"} component={HomeComponent}/>
                <Route path={"/inspections"} component={AllInspectionsComponent}/>
                <Route path={"/schedule"} component={InspectionsScheduleComponent}/>
                <Route path={"/reports/:id"} render={({match}) => {
                    const { id } = match.params;
                    return <NewReportComponent user={user} id={id}/>;
                }}/>
                <Route path={"/profile"} component={ProfileComponent} />
            </Fragment>
        );
    } else {
        return redirectHome();
    }
};
export default InspectorRoutes;
