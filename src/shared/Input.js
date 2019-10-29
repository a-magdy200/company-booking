import React from 'react';
import DatePicker from 'react-datepicker';

const InputComponent = (props) => {
    const {label, name, placeholder, value, type, onChange} = props;
    return (
        <div className={"input-box"}>
            <label htmlFor={name}>{label}: </label>
            {renderInput(type, name, placeholder, onChange, value)}
        </div>
    )
};
const renderInput = (type, name, placeholder, onChange, value) => {
    if (type === 'date') {
        return (
            <DatePicker autoComplete={'off'} id={name} selected={value} onChange={onChange} name={name}/>
        );
    }
    return (
        <input autoComplete={'off'} id={name} type={type || 'text'} name={name} placeholder={placeholder} onChange={onChange} value={value}/>
    );
};
export {InputComponent};
