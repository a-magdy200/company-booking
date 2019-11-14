import React from 'react';
import { connect } from 'react-redux';
import {select_request_action, submit_request_action} from "../../../../../redux/actions/admin/adminActions";
import TableHeadingComponent from "./TableHeadingComponent";
import TableBodyComponent from "./TableBodyComponent";
const TableComponent = ({ actions, data, heading,
                            title, status, optionOnChange,
                            submitAction, selectedActions }) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">
                            { title } <span className={'title-counter-span'}>{ data.length }
                        </span></h3>
                    </div>
                    {/*Card Header*/}
                    <div className="card-body table-responsive p-0" style={{maxHeight: '300px'}}>
                        <table className="table table-head-fixed">
                            <TableHeadingComponent heading={heading} status={status}/>
                            <TableBodyComponent
                                data={data}
                                actions={actions}
                                optionOnChange={optionOnChange}
                                selectedActions={selectedActions}
                                submitAction={submitAction}
                                />
                        </table>
                    </div>
                    {/*card-body*/}
                </div>
                {/*card*/}
            </div>
        </div>
    );
};
const mapDispatchToProps = dispatch => {
    return {
        optionOnChange: event => dispatch(select_request_action(event)),
        submitAction: (event, id) => dispatch(submit_request_action(event, id))
    };
};
const mapStateToProps = ({admin}) => {
    return { ...admin };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableComponent);
