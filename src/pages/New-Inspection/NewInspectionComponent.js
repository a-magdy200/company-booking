import React from 'react';
import { connect } from 'react-redux';
import {Button, DropdownComponent, InputComponent} from "../../shared";
import {sendRequest, updateInput} from "../../redux/actions/newinspectionActions";
import DatePicker from 'react-datepicker';

const NewInspectionComponent = props => {
    const { inspection, updateInput, sendRequest } = props;
    const { location, dueDate, date, contactDetails } = inspection;
    const { first_name, last_name, email, phone } = contactDetails;
    const dropdowns = [
        {
            label: "Inspection Type",
            name: "type",
            options: ["type 1", "type 2"]
        },
        {
            label: "template",
            name: "template",
            options: ["template 1", "template 2"]
        }
    ];
    return (
        <div className={"container"}>
            <form action="">
                {/*<DatePicker selected={date} onChange={updateInput} name={"date"}/>*/}
                <InputComponent
                    label={"location"}
                    name={"location"}
                    onChange={updateInput}
                    value={location}
                />
                <InputComponent
                    label={"date"}
                    name={"date"}
                    onChange={updateInput}
                    value={date}
                />
                <InputComponent
                    label={"dueDate"}
                    name={"dueDate"}
                    onChange={updateInput}
                    value={dueDate}
                />
                {dropdowns.map( (dropdown, index) =>
                <DropdownComponent
                    key={index}
                    label={dropdown.label}
                    name={dropdown.name}
                    onChange={updateInput}
                    options={dropdown.options}
                    value={inspection[dropdown.name]}
                />)}
                <div className="contact-details">
                    <InputComponent
                        label={"first name"}
                        name={"first_name"}
                        value={first_name}
                        onChange={updateInput}
                    />
                    <InputComponent
                        label={"last name"}
                        name={"last_name"}
                        value={last_name}
                        onChange={updateInput}
                    />
                    <InputComponent
                        label={"email"}
                        name={"email"}
                        value={email}
                        onChange={updateInput}
                    />
                    <InputComponent
                        label={"phone"}
                        name={"phone"}
                        value={phone}
                        onChange={updateInput}
                    />
                </div>
                <Button text={"Send Request"} handler={sendRequest} />
            </form>
        </div>
    );
};
const mapStateToProps = ({ newInspection }) => {
    return { inspection: { ...newInspection } };
};
const mapDispatchToProps = dispatch => {
    return {
        updateInput: event => dispatch(updateInput( event )),
        sendRequest: event => dispatch(sendRequest( event ))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewInspectionComponent);
