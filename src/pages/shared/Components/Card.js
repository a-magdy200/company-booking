import React from 'react';
const Card = props => {
    let customClass = props.customClass || '';
    return <div className={'card ' + customClass}>
        {props.children}
    </div>
};
export {Card}
