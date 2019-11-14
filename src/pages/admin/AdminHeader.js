import React from 'react';
import {Link, useHistory} from "react-router-dom";
import { connect } from 'react-redux';
import {Button} from "../../shared";

const AdminHeaderComponent = ( { requestsLength, requestsNoTemplateLength, alertsLength } ) => {
    const { location } = useHistory();
    const { pathname } = location;
    return (
        <nav className={"header fixed-top"}>
            <div className="container">
                <ul>
                    <li className={ pathname === '/' ? 'active' : ''}>
                        <Link to={"/"} >Home</Link>
                    </li>
                    <li>Examination Requests <span className={'title-counter-span'}>{ requestsLength }</span></li>
                    <li>Examination Requests - No Template <span className={'title-counter-span'}>{ requestsNoTemplateLength }</span></li>
                    <li>Alerts <span className={'title-counter-span'}>{ alertsLength }</span></li>
                    <li>
                        <Button text={'Add Request'}
                                handler={event => event.preventDefault()}
                                type={'success'}
                                />
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
const mapStateToProps = ({ admin }) => {
    const { requests, requests_no_template, alerts } = admin;
    return {
        requestsLength: requests.length,
        requestsNoTemplateLength: requests_no_template.length,
        alertsLength: alerts.length
    };
};
export default connect(mapStateToProps, null)(AdminHeaderComponent);
