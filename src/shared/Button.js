import React from 'react';
const Button = (props) => {
    const {text, handler, className} = props;
    return (
        <div className={"btn"}>
            <button className={className} onClick={handler}>{text}</button>
        </div>
    )
};
export {Button}
