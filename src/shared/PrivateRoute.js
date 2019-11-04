import { Redirect, Route } from 'react-router-dom';
import React from 'react';

const PrivateRoute = ({user, path, component}) => {

    const { isLoggedIn } = user;

    if (isLoggedIn) {
        return <Redirect to={'/login'} component={component}/>
    }
    return <Route path={path} component={component}/>
};
export { PrivateRoute };
