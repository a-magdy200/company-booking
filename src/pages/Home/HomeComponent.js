import React from 'react';
import InspectionsListComponent from "./Components/InspectionsList";
const HomeComponent = (props) => {
    const { inspections } = props;
    return (
        <div className={"container"}>
            <InspectionsListComponent inspections={ inspections }/>
        </div>
    )
};
export default HomeComponent;
