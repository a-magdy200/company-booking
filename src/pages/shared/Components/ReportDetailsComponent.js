import React from 'react';
import {CardSection} from "./CardSection";
import {Card} from "./Card";
const ReportDetailsComponent = ({ report }) => {
    const { comment } = report;
    return <Card>
        <CardSection title={'comment'} value={comment}/>
    </Card>
};
export { ReportDetailsComponent};
