import React from 'react';
import {Button, InputComponent} from "../../../../shared";
import {Card} from "../../../shared/Components";

const ScheduleReportComponent = ({ schedule, onChange, onSubmit}) => {
    return <Card>
        <InputComponent label={'Schedule Inspection'} type={'date'} name={'schedule'} value={schedule} onChange={onChange}/>
        <Button text={"Submit"} handler={onSubmit}/>
    </Card>;
};
export default ScheduleReportComponent;
