import React from 'react';
import {Link, useHistory} from 'react-router-dom';
const HeaderComponent = () => {
    const { location } = useHistory();
    const { pathname } = location;
    return (
        <nav className={"header"}>
            <div className="container">
                <ul>
                    <li className={ pathname === '/login' ? 'active' : ''}>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li className={ pathname === '/register' ? 'active' : ''}>
                        <Link to={"/register"}>Register</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export {HeaderComponent}
