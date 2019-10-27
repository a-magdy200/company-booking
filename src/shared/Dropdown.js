import React from 'react';
const DropdownComponent = props => {
    const { label, name, options, onChange } = props;
    return (
        <div className={'dropdown'}>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} onChange={onChange}>
                {options.map( (option, index) => <option key={index} value={option.replace(" ", "_")}>{option}</option>)}
            </select>
        </div>
    )
};
export {DropdownComponent};
