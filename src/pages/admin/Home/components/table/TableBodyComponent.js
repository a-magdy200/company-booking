import React from 'react';
import TableRowComponent from "./TableRowComponent";

const TableBodyComponent = ({ data, actions, optionOnChange, selectedActions, submitAction }) => {
    return <tbody>
        <TableRowComponent
            data={data}
            actions={actions}
            optionOnChange={optionOnChange}
            selectedActions={selectedActions}
            submitAction={submitAction}
        />
        </tbody>;
};
export default TableBodyComponent;
