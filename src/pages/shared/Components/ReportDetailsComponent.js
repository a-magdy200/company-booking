import React from 'react';
import {CardSection} from "./CardSection";
import {Card} from "./Card";
const ReportDetailsComponent = ({ report }) => {
    const { comment } = report;
    return <Card>
        <h2 className="card-heading">Report Details</h2>
        <CardSection title={'comment'} value={comment}/>
    </Card>
};
export { ReportDetailsComponent};
