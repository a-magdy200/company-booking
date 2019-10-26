import React from 'react';

const InputComponent = (props) => {
    const {label, name, placeholder, value, type, onChange} = props;
    return (
        <div className={"input-box"}>
            <label htmlFor={name}>{label}: </label>
            <input id={name} type={type || 'text'} name={name} placeholder={placeholder} onChange={onChange} value={value}/>
        </div>
    )
};
export {InputComponent};
