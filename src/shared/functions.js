import React from "react";
import { Redirect } from 'react-router-dom';

export const renderErrors = errors => {
    if (errors.length) {
        return errors.map( error => <div>{error}</div>)
    }
    return null
};
export const redirectHome = () => {
    return <Redirect to={'/login'} />
};

