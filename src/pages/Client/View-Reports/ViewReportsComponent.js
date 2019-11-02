import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';

const ViewReportsComponent = props => {
    const { inspection } = props;
    const { id } = useParams();
    return <div>
        <p>Report page</p>
        <p>Report ID: {id}</p>
    </div>
};

const mapStateToProps = (state) => {
    return {...state};
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ViewReportsComponent);
