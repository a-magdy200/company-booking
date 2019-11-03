import { CardSection } from "./CardSection";
import { Card } from "./Card";
import React from "react";

const InspectionDetailsComponent = ({inspection}) => {
    const {date, dueDate, type, location, status} = inspection;
    return <Card>
        <CardSection title={'date'} value={date}/>
        <CardSection title={'due date'} value={dueDate}/>
        <CardSection title={'type'} value={type}/>
        <CardSection title={'location'} value={location}/>
        <CardSection title={'status'} value={status}/>
    </Card>
};
export { InspectionDetailsComponent };
