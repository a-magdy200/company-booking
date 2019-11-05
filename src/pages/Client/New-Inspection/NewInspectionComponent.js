import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Button, DropdownComponent, InputComponent} from "../../../shared";
import {
    new_inspection_preload_inputs,
    reset,
    sendRequest,
    updateInput
} from "../../../redux/actions/client/newinspectionActions";
import 'react-datepicker/dist/react-datepicker.css';

const NewInspectionComponent = props => {
    const { client_inspection, updateInput, sendRequest, reset, preload } = props;
    const { location, dueDate, date, contactDetails, loading, success, preloaded } = client_inspection;
    if (success) {
        reset();
        return <Redirect to={'/requests-list'} />
    }
    if (!preloaded) {
        preload();
    }

    const { first_name, last_name, email, phone } = contactDetails;
    const dropdowns = [
        {
            label: "Inspection Type",
            name: "type",
            options: ['Sports', 'Baby', 'Music', 'Industrial', 'Kids', 'Health', 'Home', 'Shoes', 'Tools', 'Beauty', 'Automotive', 'Outdoors', 'Clothing']
        },
        {
            label: "template",
            name: "template",
            options: ["template 1", "template 2"]
        }
    ];
    return (
        <div className={"container"}>
            { loading ? <div className={"loading"}>Loading...</div> :
                <form action="">
                    <InputComponent
                        label={"location"}
                        name={"location"}
                        onChange={updateInput}
                        value={location}
                    />
                    <InputComponent
                        label={"date"}
                        name={"date"}
                        onChange={event => updateInput(event, 'date')}
                        value={date}
                        type={"date"}
                    />
                    <InputComponent
                        label={"dueDate"}
                        name={"dueDate"}
                        onChange={event => updateInput(event, 'dueDate')}
                        value={dueDate}
                        type={"date"}
                    />
                    {dropdowns.map((dropdown, index) =>
                        <DropdownComponent
                            key={index}
                            label={dropdown.label}
                            name={dropdown.name}
                            onChange={updateInput}
                            options={dropdown.options}
                            value={client_inspection[dropdown.name]}
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
                    <Button text={"Send Request"} handler={sendRequest}/>
                </form>
            }
        </div>
    );
};
const mapStateToProps = ({ client_newInspection }) => {
    return { client_inspection: { ...client_newInspection } };
};
const mapDispatchToProps = (dispatch, { user }) => {
    const {first_name, last_name, email, id} = user;
    const inputs = {
        first_name, last_name, email,
        client_id: id
    };
    return {
        updateInput: (event, dateInputName = null) => dispatch(updateInput( event, dateInputName )),
        sendRequest: event => dispatch(sendRequest( event )),
        reset: () => dispatch(reset()),
        preload: () => dispatch(new_inspection_preload_inputs(inputs))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewInspectionComponent);
