import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import {redirectHome} from "../../shared/functions";
import HomeComponent from "./Home/HomeComponent";
import NewInspectionComponent from "./New-Inspection/NewInspectionComponent";
import AllInspectionsComponent from "./All-Inspections/AllInspectionsComponent";

const ClientRoutes = ({user}) => {
    if (user === 'a') {
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
export default ClientRoutes;
