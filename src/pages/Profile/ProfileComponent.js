import React from 'react';
import { connect } from 'react-redux';

const ProfileComponent = ({user_profile}) => {
    return <div>Profile Component</div>
};

const mapStateToProps = ({user_profile}) => {
    return { user_profile };
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
