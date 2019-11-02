import React from 'react';
import {Link} from "react-router-dom";
const InspectionsListRowComponent = (props) => {
    const { inspection } = props;
    const { type, date, dueDate, status, id, clickable } = inspection;
    return (
        <div className={"inspection-row"}>
            <ul>
                <li>{type}</li>
                <li>{date}</li>
                <li>{dueDate}</li>
                <li className={status}>{status}</li>
                {clickable ? <li><Link to={"/requests/" + id}>View Details</Link></li> : null}
            </ul>
        </div>
    );
};
export default InspectionsListRowComponent;
