import React from 'react';
import {Link, useHistory} from 'react-router-dom';
const HeaderComponent = () => {
    const { location } = useHistory();
    const { pathname } = location;
    console.log(pathname);
    return (
        <nav className={"header"}>
            <div className="container">
                <ul>
                    <li className={ pathname === '/' ? 'active' : ''}>
                        <Link to={"/"} >Home</Link>
                    </li>
                    <li className={ pathname === '/new-request' ? 'active' : ''}>
                        <Link to={"/new-request"}>New Request</Link>
                    </li>
                    <li className={ pathname === '/requests-list' ? 'active' : ''}>
                        <Link to={"/requests-list"}>Requests Lists</Link>
                    </li>
                    <li className={ pathname === '/login' ? 'active' : ''}>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li className={ pathname === '/logout' ? 'active' : ''}>
                        <Link to={"/logout"}>Logout</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export {HeaderComponent}
