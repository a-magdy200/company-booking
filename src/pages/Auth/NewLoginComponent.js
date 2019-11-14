import React from 'react';
import { connect } from 'react-redux';
const NewLoginComponent = props => {
    return <div>new login component</div>
};
const mapStateToProps = ({ auth }) => {
    return { ...auth };
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(NewLoginComponent);
