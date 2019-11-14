import React from 'react';
import {Button} from "../../../../../shared";

const TableCellComponent = ( { row, actions, optionOnChange, selectedActions, submitAction } ) => {
    if (!row) {
        return null;
    }
    const keys = Object.keys(row);
    let defaultValue = '';
    for (let i = 0; i < selectedActions.length; i++) {
        if (selectedActions[i].name === row.id) {
            defaultValue = selectedActions[i].value;
            break;
        }
    }
    return keys.map( ( key, index ) => {
        if (key === 'id') return null;
        return <td key={index}>{ key === 'action' ?
            <form>
                <select defaultValue={ defaultValue } onChange={ optionOnChange } name={ row.id }>
                    <option value={''}>-</option>
                    { actions.map( ({ text, value }, index) => <option key={index} value={value}>{ text }</option>) }
                </select>
                <Button
                    text={'submit'}
                    handler={event => submitAction(event, row.id)}
                    type={'success'}
                    disabled={defaultValue === ''}
                />
            </form>
            : row[key] }</td>
    });
};
export default TableCellComponent;
