import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import HomeComponent from "./Home/HomeComponent";
import ProfileComponent from "../Profile/ProfileComponent";
const AdminRoutes = ({ user }) => {
    return <Fragment>
        <Route exact path={"/"} component={HomeComponent}/>
        <Route exact path={"/profile"} component={ProfileComponent}/>
    </Fragment>;
};
export default AdminRoutes;
