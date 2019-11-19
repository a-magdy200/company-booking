import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import { connect } from 'react-redux';

const HeaderComponent = ({ requestsLength, requestsNoTemplateLength, alertsLength }) => {
    const { location } = useHistory();
    const { pathname } = location;
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to={"/"} className="nav-link">Home</Link>
                </li>
                <li className={"nav-item d-none d-sm-inline-block" + ( pathname === '/requests' ? ' active' : '' )}>
                    <Link to={"/requests"} className="nav-link">
                        Examination Requests
                        <span className="badge badge-danger navbar-badge">{ requestsLength }</span>
                    </Link>
                </li>
                <li className={"nav-item d-none d-sm-inline-block" + ( pathname === '/requests-no-temp' ? ' active' : '' )}>
                    <Link to={"/requests-no-temp"} className="nav-link">
                        Examination Requests - No Template
                        <span className="badge badge-danger navbar-badge">{ requestsNoTemplateLength }</span>
                    </Link>
                </li>
                <li className={"nav-item d-none d-sm-inline-block" + ( pathname === '/alerts' ? ' active' : '' )}>
                    <Link to={"/alerts"} className="nav-link">
                        Alerts
                        <span className="badge badge-danger navbar-badge">{ alertsLength }</span>
                    </Link>
                </li>
                <li className={"nav-item d-none d-sm-inline-block" + ( pathname === '/profile' ? ' active' : '' )}>
                    <Link to={"/profile"} className="nav-link">Profile</Link>
                </li>
                <li className={"nav-item d-none d-sm-inline-block"}>
                    <Link to={"/logout"} className="nav-link">Logout</Link>
                </li>
            </ul>
        </nav>
    )
};
const mapStateToProps = ({ admin }) => {
    const { requests, requests_no_template, alerts } = admin;
    return {
        requestsLength: requests.length,
        requestsNoTemplateLength: requests_no_template.length,
        alertsLength: alerts.length
    };
};
export default connect(mapStateToProps, null)(HeaderComponent);
