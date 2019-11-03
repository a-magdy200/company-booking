import React from 'react';
const CardSection = props => {
    const { title, value } = props;
    return <div className={'card-section'}>
        <span className="title">{title}</span>
        <span className="value">{value}</span>
    </div>
};
export {CardSection}
