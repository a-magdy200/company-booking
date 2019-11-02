import React from 'react';
import {Link} from "react-router-dom";
const InspectionsListRowComponent = (props) => {
    const { inspection } = props;
    const { type, date, dueDate, status, id, completed } = inspection;
    const user = 'a';
    return (
        <div className={"inspection-row"}>
            <ul>
                <li>{type}</li>
                <li>{date}</li>
                <li>{dueDate}</li>
                <li className={'status ' + status}>{status}</li>
                <li>
                    {
                        user === 'a' ?
                            (
                            completed ? <Link to={'/reports/' + id}>View Report</Link> : <span>Ongoing</span>
                            ) :
                            (
                                user === 'b' ?
                                    <Link to={'/inspections/' + id}>View Details</Link>:<span>-</span>
                            )
                    }
                </li>
            </ul>
        </div>
    );
};
export default InspectionsListRowComponent;
