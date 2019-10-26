import React from 'react';
import {Link} from 'react-router-dom';
const HeaderComponent = (props) => {
    const {activeLink} = props;
    return (
        <nav className={"header"}>
            <div className="container">
                <ul>
                    <li>
                        <Link to={"/"} >Home</Link>
                    </li>
                    <li>
                        <Link to={"/new-request"}>New Request</Link>
                    </li>
                    <li>
                        <Link to={"/requests-list"}>Requests Lists</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/logout"}>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export {HeaderComponent}
