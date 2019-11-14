import React from 'react';
import {Link, useHistory} from "react-router-dom";
const AdminHeaderComponent = props => {
    const { location } = useHistory();
    const { pathname } = location;
    return (
        <nav className={"header fixed-top"}>
            <div className="container">
                <ul>
                    <li className={ pathname === '/' ? 'active' : ''}>
                        <Link to={"/"} >Home</Link>
                    </li>
                    <li className={ pathname === '/profile' ? 'active' : ''}>
                        <Link to={"/profile"}>Profile</Link>
                    </li>
                    <li className={ pathname === '/logout' ? 'active' : ''}>
                        <Link to={"/logout"}>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export default AdminHeaderComponent;
