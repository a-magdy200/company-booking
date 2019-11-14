import React from 'react';
import { connect } from 'react-redux';
import LoginComponent from "./LoginComponent";
const NewLoginComponent = props => {
    return <div className={'auth-container'}>
        <div className="auth-box">
            <div className="auth-heading">
                <span className="logo">L</span>
                <span className="company">Company</span>
            </div>
            <LoginComponent/>
        </div>
    </div>
};
const mapStateToProps = ({ auth }) => {
    return { ...auth };
};
const mapDispatchToProps = dispatch => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(NewLoginComponent);
