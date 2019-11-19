import React from 'react';
import {Link} from "react-router-dom";
const InspectionsListRowComponent = (props) => {
    const { inspection, user } = props;
    const { type, date, dueDate, status, id, completed } = inspection;
    const { role } = user;
    return (
        <div className={"inspection-row"}>
            <ul>
                <li>{type}</li>
                <li>{date}</li>
                <li>{dueDate}</li>
                <li className={'status ' + status}>{status}</li>
                <li>
                    {
                        role === 'client' ?
                            (
                            completed ? <Link to={'/reports/' + id}>View Report</Link> : <span>Ongoing</span>
                            ) :
                            (
                                (role === 'inspector' || role === 'admin') ?
                                    <Link to={'/reports/' + id}>View Details</Link>:<span>-</span>
                            )
                    }
                </li>
            </ul>
        </div>
    );
};
export default InspectionsListRowComponent;
