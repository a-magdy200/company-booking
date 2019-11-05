import React, {Fragment} from 'react';
import { Route } from 'react-router-dom';
import {redirectHome} from "../../shared/functions";
import HomeComponent from "./Home/HomeComponent";
import NewInspectionComponent from "./New-Inspection/NewInspectionComponent";
import AllInspectionsComponent from "./All-Inspections/AllInspectionsComponent";
import ViewReportsComponent from "./View-Report/ViewReportComponent";

const ClientRoutes = ({ user }) => {
    if (user.role === 'client') {
        return (
            <Fragment>
                <Route exact path={"/"} component={HomeComponent}/>
                <Route path={"/new-request"} render={ () => <NewInspectionComponent user={user} />}/>
                <Route path={"/requests-list"} component={AllInspectionsComponent}/>
                <Route path={"/reports/:id"} render={({match}) => {
                    const { id } = match.params;
                    return <ViewReportsComponent id={id}/>;
                }}/>
            </Fragment>
        );
    } else {
        return redirectHome();
    }
};
export default ClientRoutes;
