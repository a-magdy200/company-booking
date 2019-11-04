import { CardSection } from "./CardSection";
import { Card } from "./Card";
import React from "react";

const InspectionDetailsComponent = ({inspection}) => {
    // const {date, dueDate, type, location, status} = inspection;
    const keys = Object.keys(inspection);
    return <Card>
        <h2 className={'card-heading'}>Inspection Details</h2>
        {
            keys.map( (key, index) => {
                return <CardSection title={key} key={index} value={inspection[key]} />
            })
        }
    </Card>
};
export { InspectionDetailsComponent };
