import React from "react";
import { Redirect } from 'react-router-dom';

export const renderErrors = errors => {
    if (typeof(errors) === 'object' && errors.length) {
        return errors.map( error => <div className={'error'}>* {error}</div>)
    }
    if (typeof(errors) === 'string') {
        return <div className={'error'}>* {errors}</div>
    }
    return null
};
export const redirectHome = () => {
    return <Redirect to={'/login'} />
};
export const loadingComponent = () => <div className={'loading'}>Loading...</div>;
