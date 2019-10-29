import React from 'react';
import {Link, useHistory} from 'react-router-dom';

const InspectorHeaderComponent = () => {
    const { location } = useHistory();
    const { pathname } = location;
    return (
        <nav className={"header"}>
            <div className="container">
                <ul>
                    <li className={ pathname === '/' ? 'active' : ''}>
                        <Link to={"/"} >Home</Link>
                    </li>
                    <li className={ pathname === '/schedule' ? 'active' : ''}>
                        <Link to={"/schedule"}>Inspections Schedule</Link>
                    </li>
                    <li className={ pathname === '/inspections' ? 'active' : ''}>
                        <Link to={"/inspections"}>Inspections List</Link>
                    </li>
                    <li className={ pathname === '/logout' ? 'active' : ''}>
                        <Link to={"/logout"}>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export  default InspectorHeaderComponent;
