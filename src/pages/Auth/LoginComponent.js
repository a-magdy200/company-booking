import React from 'react';
import { connect } from 'react-redux';
import {change_auth_layout, login_input_update, submit_login_email} from "../../redux/actions/loginActions";
import {Button} from "../../shared";

const LoginComponent = ({
                            updateInput, submitEmail, changeLayout,
                            email, loading,
                        }) => {

    if (loading) return <div className={'loading'}>Loading...</div>;

    return <form>
        <h2 className={'text-left'}>sign in</h2>
        <input
            type={'text'}
            name={'email'}
            onChange={updateInput}
            className={'form-control'}
            placeholder={'example@domain.com'}
            value={email} />
        <p>No account? <span onClick={() => changeLayout('register')} className={'dummy-link'}>Please register</span></p>
        <span className={'button-container'}>
            <Button
                type={'primary btn-flat'}
                text={'next'}
                handler={ submitEmail } />
        </span>
    </form>;
};
const mapDispatchToProps = dispatch => {
    return {
        updateInput: event => dispatch(login_input_update(event)),
        submitEmail: event => dispatch(submit_login_email(event)),
        changeLayout: layout => dispatch(change_auth_layout(layout))
    };
};
const mapStateToProps = ({ login }) => {
    const { loading } = login;
    const { email } = login.login;
    return { loading, email };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
