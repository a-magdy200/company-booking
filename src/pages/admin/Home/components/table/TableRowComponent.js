import React from 'react';
import TableCellComponent from "./TableCellComponent";

const TableRowComponent = ({ data, actions, optionOnChange, selectedActions, submitAction }) => {
    return data.map( ( row, index ) => <tr key={index}>
            <TableCellComponent
                row={row}
                actions={actions}
                optionOnChange={optionOnChange}
                selectedActions={selectedActions}
                submitAction={submitAction}
            />
        </tr>
    );
};
export default TableRowComponent;
