import React from 'react';

const TableHeadingComponent = ({ heading, status }) => {
    return <thead>
            <tr>
                { heading.map( ( head, index ) => {
                    if (head === 'status') {
                        if (!status) return null;
                    }
                    return <th key={index}>{ head }</th>
                }) }
            </tr>
        </thead>;
};
export default TableHeadingComponent;
