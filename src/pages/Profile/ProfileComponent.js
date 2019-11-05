import React from 'react';
import { connect } from 'react-redux';
import {DetailsComponent} from "../shared/Components";

const ProfileComponent = ({ user }) => {
    return <div className={'container'}>
        <DetailsComponent title={"Profile Info"} details={user}/>
    </div>
};

const mapStateToProps = ({user}) => {
    const { first_name, last_name, email, role, id } = user;
    return { user: { id, first_name, last_name, email, role } };
};
const mapDispatchToProps = dispatch => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileComponent);
