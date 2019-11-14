import React from 'react';
const Button = props => {
    const {text, handler, type, size, disabled} = props;
    let className = 'btn btn-block';
    className += ' btn-' + (type ? type : 'default');
    className += (size ? ' btn-' + size : '');
    className += (disabled) ? ' disabled' : '';
    if (disabled) return <button className={className} onClick={ e => e.preventDefault() }>{ text }</button>;
    return <button className={className} onClick={handler}>{text}</button>;
};
export { Button }
