import React, {Fragment} from 'react';
import InspectionsListRowComponent from "./InspectionListRow";
const InspectionsListComponent = (props) => {
    const { inspections } = props;
    return (
        <Fragment>
            {renderContent(inspections)}
        </Fragment>
    );
};
const renderContent = inspections => {
    if (inspections.length) {
        return (
            <div className={"inspections-list"}>
                <h2>Inspections List</h2>
                <ul className="inspections-list-heading">
                    <li>Type</li>
                    <li>Date</li>
                    <li>Due Date</li>
                    <li>Status</li>
                    <li>Action</li>
                </ul>
                {inspections.map( (inspection, index) => <InspectionsListRowComponent
                    key={index}
                    inspection={inspection} /> )}
            </div>
        )
    }
};
export {InspectionsListComponent};
