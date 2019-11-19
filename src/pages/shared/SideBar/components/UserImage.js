import React from 'react';
import { Link } from "react-router-dom";
const UserImageComponent = ({ picture, name }) => {
    return <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
            <img src={ picture } className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
            <Link to={'/profile'} className="d-block">{ name }</Link>
        </div>
    </div>;
};
export default UserImageComponent;
