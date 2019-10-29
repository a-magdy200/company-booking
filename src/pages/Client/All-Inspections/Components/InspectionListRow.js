import React from 'react';
const InspectionsListRowComponent = (props) => {
    const { inspection } = props;
    const { type, date, dueDate, status } = inspection;
    return (
        <div className={"inspection-row"}>
            <ul>
                <li>{type}</li>
                <li>{date}</li>
                <li>{dueDate}</li>
                <li className={status}>{status}</li>
            </ul>
        </div>
    );
};
export default InspectionsListRowComponent;
