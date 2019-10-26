import React from "react";

export const renderErrors = errors => {
    console.log(errors);
    if (errors.length) {
        return errors.map( error => <div>{error}</div>)
    }
    return null
};
