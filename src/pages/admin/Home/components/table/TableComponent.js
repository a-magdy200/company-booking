import React from 'react';
import {Button} from "../../../../../shared";
import { connect } from 'react-redux';
import {select_request_action, submit_request_action} from "../../../../../redux/actions/admin/adminActions";
const TableComponent = ({ actions, data, heading,
                            title, status, optionOnChange,
                            submitAction, selectedActions }) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">{ title }</h3>
                    </div>
                    {/*Card Header*/}
                    <div className="card-body table-responsive p-0" style={{height: '300px'}}>
                        <table className="table table-head-fixed">
                            <thead>
                                <tr>
                                    { heading.map( ( head, index ) => {
                                        if (head === 'status') {
                                            if (!status) return null;
                                        }
                                        return <th key={index}>{ head }</th>
                                    }) }
                                </tr>
                            </thead>
                            <tbody>
                                { renderTable(data, actions, optionOnChange, selectedActions) }
                            </tbody>
                        </table>
                    </div>
                    {/*card-body*/}
                </div>
                {/*card*/}
            </div>
        </div>
    );
};

const renderTable = ( table, actions, optionOnChange, selectedActions ) => {
    return table.map( ( row, index ) => <tr key={index}>
            { renderTableRow(row, actions, optionOnChange, selectedActions) }
        </tr>
    );
};
const renderTableRow = ( row, actions, optionOnChange, selectedActions ) => {
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
                    handler={console.log}
                    type={'success'}
                    disabled={defaultValue === ''}
                />
            </form>
            : row[key] }</td>
    });
};
const mapDispatchToProps = dispatch => {
    return {
        optionOnChange: event => dispatch(select_request_action(event)),
        submitAction: event => dispatch(submit_request_action(event))
    };
};
const mapStateToProps = ({admin}) => {
    return { ...admin };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
