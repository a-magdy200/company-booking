import {Button, InputComponent} from "../../../shared";
import React from "react";

const NewReportComponent = ( { report, onChange, submitReport } ) => {
    const { comment } = report;
    return (
        <form action="">
            <InputComponent
                label={'Comment'}
                name={'comment'}
                type={'textarea'}
                value={comment}
                onChange={onChange}
            />
            <Button text={"Submit Report"} handler={submitReport}/>
        </form>
    );
};
export { NewReportComponent };
